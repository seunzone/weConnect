import db from '../models';

const { Profile, } = db;
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
const sortSearch = (req, res, next) => {
  const { location, category } = req.query;
  if (location || category) {
    if (location) {
      Profile
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
      Profile
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
};

export default sortSearch;
