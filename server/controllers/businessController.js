import db from '../models';

const { Profile, Review, User } = db;

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
  static addProfile(req, res) {
    const {
      name, description, image, location, category
    } = req.body;

    Profile.findOne({
      where: {
        name,
        userId: req.userId
      }
    })
      .then((foundProfile) => {
        if (foundProfile) {
          return res.status(409)
            .json({
              status: 'fail',
              message: 'You already have this as an existing business'
            });
        }
        if (!foundProfile) {
          Profile.create({
            name,
            userId: req.userId,
            description,
            image,
            location,
            category
          })
            .then(newProfile => res.status(201)
              .json({
                status: 'success',
                message: 'Profile created successfully',
                profile: newProfile
              }));
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
  static updateProfile(req, res) {
    const {
      name, description, image, location, category
    } = req.body;

    Profile.findOne({
      where: {
        id: req.params.id,
        userId: req.userId
      }
    })
      .then((foundProfile) => {
        if (foundProfile) {
          const update = {
            name: name || foundProfile.name,
            description: description || foundProfile.description,
            image: image || foundProfile.image,
            location: location || foundProfile.location,
            category: category || foundProfile.category,
          };
          foundProfile.update(update)
            .then(updatedProfile => res.status(200)
              .json({
                status: 'success',
                message: 'Update successful',
                profile: updatedProfile
              }));
        }
        if (!foundProfile) {
          return res.status(404)
            .json({
              status: 'fail',
              message: `Can't find profile with id ${req.params.id} by you`
            });
        }
      })
      .catch(() => res.status(500).json({
        status: 'error',
        message: 'Internal server error'
      }));
  }
  /**
   * @description - Delete a profile
   * @static
   *
   * @param {object} req - HTTP Request
   * @param {object} res - HTTP Response
   *
   * @memberof businessController
   *
   * @returns {object} Class instance
   */
  static deleteProfile(req, res) {
    Profile.findOne({
      where: {
        id: req.params.id,
        userId: req.userId
      }
    })
      .then((foundProfile) => {
        if (!foundProfile) {
          return res.status(404)
            .json({
              status: 'fail',
              message: `Can't find profile with id ${req.params.id} by you`
            });
        }
        if (foundProfile) {
          Profile.destroy({
            where: {
              id: req.params.id,
              userId: req.userId
            },
            cascade: true
          })
            .then(() => res.status(200)
              .json({
                status: 'success',
                message: 'profile deleted'
              }));
        }
      })
      .catch(() => res.status(500).json({
        status: 'error',
        message: 'Internal server error'
      }));
  }
  /**
   * @description - get a single profile
   * @static
   *
   * @param {object} req - HTTP Request
   * @param {object} res - HTTP Response
   *
   * @memberof businessController
   *
   * @returns {object} Class instance
   */
  static getSingleProfile(req, res) {
    Profile.findOne({
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
    }).then((foundProfile) => {
      if (!foundProfile) {
        return res.status(404).send({
          message: 'Business Not Found',
        });
      }
      return res.status(200).send(foundProfile);
    })
      .catch(error => res.status(404).send(error));
  }
  /**
   * @description - get a single profile
   * @static
   *
   * @param {object} req - HTTP Request
   * @param {object} res - HTTP Response
   *
   * @memberof businessController
   *
   * @returns {object} Class instance
   */
  static getAllProfile(req, res) {
    return Profile.all()
      .then(foundProfile => res.status(200).send(foundProfile))
      .catch(error => res.status(400).send(error));
  }
}

