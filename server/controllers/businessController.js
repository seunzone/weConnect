import db from '../models';

const { Business, Review, User } = db;

/**
 * @class businessController
 *
 * @export
 *
 */
export default class businessController {
  /**
   * @description - Add a new business
   * @static
   *
   * @param {object} req - HTTP Request
   * @param {object} res - HTTP Response
   *
   * @memberof businessController
   *
   * @returns {object} Class instance
   */
  static addBusiness(req, res) {
    const {
      name, description, image, location, category
    } = req.body;

    Business.findOne({
      where: {
        name,
        userId: req.userId
      }
    })
      .then((foundBusiness) => {
        if (foundBusiness) {
          return res.status(400)
            .json({
              status: 'fail',
              message: 'You already have this as an existing business'
            });
        }
        if (!foundBusiness) {
          Business.create({
            name,
            userId: req.userId,
            description,
            image,
            location,
            category
          })
            .then((newBusiness) => {
              return res.status(201)
                .json({
                  status: 'success',
                  message: 'Business created successfully',
                  Business: newBusiness
                });
            });
        }
      })
      .catch(() => res.status(500).json({
        status: 'error',
        message: 'Internal server error'
      }));
  }
  /**
   * @description - Update a business
   * @static
   *
   * @param {object} req - HTTP Request
   * @param {object} res - HTTP Response
   *
   * @memberof businessController
   *
   * @returns {object} Class instance
   */
  static updateBusiness(req, res) {
    const {
      name, description, image, location, category
    } = req.body;

    Business.findOne({
      where: {
        id: req.params.id,
        userId: req.userId
      }
    })
      .then((foundBusiness) => {
        if (foundBusiness) {
          const update = {
            name: name || foundBusiness.name,
            description: description || foundBusiness.description,
            image: image || foundBusiness.image,
            location: location || foundBusiness.location,
            category: category || foundBusiness.category,
          };
          foundBusiness.update(update)
            .then(updatedBusiness => res.status(200)
              .json({
                status: 'success',
                message: 'Update successful',
                Business: updatedBusiness
              }));
        }
        if (!foundBusiness) {
          return res.status(404)
            .json({
              status: 'fail',
              message: `Can't find Business with id ${req.params.id} by you`
            });
        }
      })
      .catch(() => res.status(500).json({
        status: 'error',
        message: 'Internal server error'
      }));
  }
  /**
   * @description - Delete a Business
   * @static
   *
   * @param {object} req - HTTP Request
   * @param {object} res - HTTP Response
   *
   * @memberof businessController
   *
   * @returns {object} Class instance
   */
  static deleteBusiness(req, res) {
    Business.findOne({
      where: {
        id: req.params.id,
        userId: req.userId
      }
    })
      .then((foundBusiness) => {
        if (!foundBusiness) {
          return res.status(404)
            .json({
              status: 'fail',
              message: `Can't find Business with id ${req.params.id} by you`
            });
        }
        if (foundBusiness) {
          Business.destroy({
            where: {
              id: req.params.id,
              userId: req.userId
            },
            cascade: true
          })
            .then(() => res.status(200)
              .json({
                status: 'success',
                message: 'Business deleted'
              }));
        }
      })
      .catch(() => res.status(500).json({
        status: 'error',
        message: 'Internal server error'
      }));
  }
  /**
   * @description - get a single Business
   * @static
   *
   * @param {object} req - HTTP Request
   * @param {object} res - HTTP Response
   *
   * @memberof businessController
   *
   * @returns {object} Class instance
   */
  static getSingleBusiness(req, res) {
    Business.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Review,
          attributes: ['content', 'createdAt'],
          include: [{
            model: User,
            attributes: ['username', 'email']
          }]
        }
      ]
    }).then((foundBusiness) => {
      if (!foundBusiness) {
        return res.status(404).send({
          message: 'Business Not Found',
        });
      }
      return res.status(200).send(foundBusiness);
    })
      .catch(error => res.status(404).send(error));
  }
  /**
   * @description - get a single Business
   * @static
   *
   * @param {object} req - HTTP Request
   * @param {object} res - HTTP Response
   *
   * @memberof businessController
   *
   * @returns {object} Class instance
   */
  static getAllBusiness(req, res) {
    return Business.all()
      // .then(foundBusiness => res.status(200).send(foundBusiness))
      .then(foundBusiness => {
        res.status(200).json({
          business: foundBusiness
        })
      })
      .catch(error => res.status(400).send(error));
  }
  /**
   * @description - sort user search by location and category
   *
   * @param  {Object} req - request
   *
   * @param  {object} res - response
   *
   * @param {Object} next - Call back function
   *
   * @return {null} - null
   */
  static sortSearch(req, res, next) {
    const { location, category } = req.query;
    if (location || category) {
      if (location) {
        Business
          .findAll({
            where: {
              location: { $iLike: `%${location}%` }
            }
          })
          .then((business) => {
          // If no businesses found, return error
            if (business.length < 1) {
              return res.status(404).json({
                message: 'No business found for this location!',
              });
            }
            // If business found, return business found
            return res.status(200).json({
              message: 'Business Found!',
              business
            });
          });
      }
      if (category) {
        Business
          .findAll({
            where: {
              category: { $iLike: `%${category}%` }
            }
          })
          .then((business) => {
          // If no businesses found, return error
            if (business.length < 1) {
              return res.status(404).json({
                message: 'No business found for this category!',
              });
            }
            // If business found, return business found
            return res.status(200).json({
              message: 'Business Found!',
              business
            });
          });
      }
    } else if (!location || !category) {
      return next();
    }
  }
}

