import db from '../models';

const { Review, Business, User } = db;

/**
 * @class reviewsController
 *
 * @export
 *
 */
export default class reviewsController {
  /**
     * @description - Add a review to a business
     * @static
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     *
     * @memberof reviewsController
     *
     * @returns {object} Class instance
     */
  static addReview(req, res) {
    const { content, rating } = req.body;

    return Business.findById(req.params.id)
      .then((foundBusiness) => {
        if (!foundBusiness) {
          return res.status(400)
            .json({
              status: 'fail',
              message: `No Business with id ${req.params.id} was found`
            });
        }
        const newReview = {
          content,
          rating,
          userId: req.userId,
          businessId: req.params.id
        };
        return Review.create(newReview)
          .then(createdReview => Review.findById(createdReview.id, {
            include: [{
              model: User, attributes: ['username', 'email']
            }]
          }).then(review => res.status(201)
            .json({
              status: 'success',
              review
            })));
      })
      .catch(() => res.status(500).json({
        status: 'error',
        message: 'Internal server error'
      }));
  }
}

