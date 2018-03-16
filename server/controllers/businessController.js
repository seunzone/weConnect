import db from '../models/index';

const { Profile } = db;

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
                recipe: newProfile
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
        id: req.params.profileId,
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
            category: category || foundProfile.category
          };
          foundProfile.update(update)
            .then(updatedProfile => res.status(200)
              .json({
                status: 'success',
                message: 'Update successful',
                recipe: updatedProfile
              }));
        }
        if (!foundProfile) {
          return res.status(404)
            .json({
              status: 'fail',
              message: `Can't find profile with id ${req.params.profileId} by you`
            });
        }
      })
      .catch(() => res.status(500).json({
        status: 'error',
        message: 'Internal server error'
      }));
  }
}
