import validator from 'validator';

/**
 *
 *
 * @class Validator
 */
class Validator {
  /**
     *
     *
     * @param {any} req
     * @param {any} res
     * @returns {json} validate business registeration
     * @memberof Validator
     */
  addBusinessValidator(req, res, next) {
    const {
      name, details, category, location
    } = req.body;
    const errors = {};
    if (name === undefined || details === undefined || category === undefined
            || location === undefined) {
      res.status(400)
        .json({
          message: 'All or some of the field is/are undefined',
        });
    } else {
      // check for name
      if (!validator.isEmpty(name)) {
        if (!validator.isLength(name, { min: 3, max: 50 })) {
          errors.name = 'Name of business must between 3 to 50 characters';
        }
      } else {
        errors.name = 'Name of business is required';
      }

      // check for details
      if (!validator.isEmpty(details)) {
        if (!validator.isLength(details, { min: 20, max: 500 })) {
          errors.details = 'Details of business must between 20 to 500 characters';
        }
      } else {
        errors.details = 'Details of business is required';
      }

      // check for category
      if (validator.isEmpty(category)) {
        errors.category = 'category is required';
      }

      // check for location
      if (validator.isEmpty(location)) {
        errors.location = 'location is required';
      }

      if (Object.keys(errors).length !== 0) {
        return res.status(400)
          .json(errors);
      } next();
    }
  }
}


const validate = new Validator();

export default validate;
