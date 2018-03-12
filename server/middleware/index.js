import db from '../models/faker';

/**
 *
 *
 * @class Profile
 */
class MiddleWare {
  /**
   *
   *sort user search
   * @param {any} req
   * @param {any} res
   * @param {any} next
   * @returns {json}gets sorted search
   * @memberof profile
   */
  sorter(req, res, next) {
    const { location, category } = req.query;
    const locate = [];
    const categorise = [];
    if (location) {
      for (let i = 0; i < db.profile.length; i += 1) {
        if (location.toLowerCase() === db.profile[i].location.toLowerCase()) {
          locate.push(db.profile[i]);
        }
      }
      return res.status(200).json(locate);
    }
    if (category) {
      for (let i = 0; i < db.profile.length; i += 1) {
        if (category.toLowerCase() === db.profile[i].category.toLowerCase()) {
          categorise.push(db.profile[i]);
        }
      }
      return res.status(200).json(categorise);
    } else if (!category || !location) {
      next();
    }
  }
}

const middleware = new MiddleWare();

export default middleware;
