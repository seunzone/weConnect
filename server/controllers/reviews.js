import db from '../models/faker';

/**
 *
 *
 * @class Review
 */
class Review {
  /**
     *
     *
     * @param {any} req
     * @param {any} res
     * @returns {json} posts a business review
     * @memberof Review
     */
  addReview(req, res) {
    const { reviewer } = req.body;
    const { content } = req.body;
    const review = req.params.id;
    if (!content) {
      return res.status(400)
        .send('Review should have a content');
    }
    if (!reviewer) {
      return res.status(400)
        .send('Please enter your name');
    }
    const newReview = {
      profileId: review,
      owner: reviewer,
      content
    };
    db.reviews.push(newReview);
    return res.status(201)
      .json({
        status: 'success',
        message: 'Review added',
        review: newReview
      });
  }
  /**
   *
   *get review
   * @param {any} req
   * @param {any} res
   * @returns {json}gets review of a business
   * @memberof Review
   */
  getReview(req, res) {
    for (let i = 0; i < db.reviews.length; i += 1) {
      if (db.reviews[i].id === parseInt(req.params.id, 10)) {
        return res.status(200).json({
          center: db.reviews[i],
          message: 'success',
          error: false
        });
      }
    }
    res.status(404).json({
      message: 'Business not found',
      error: true
    });
  }
}


const review = new Review();

export default review;
