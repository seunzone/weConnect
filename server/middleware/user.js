import db from '../models';

const { Business } = db;
/**
   * @description - Checks if the User is authorized
   *
   * @param  {Object} req - request
   *
   * @param  {object} res - response
   *
   * @param {Object} next - Call back function
   *
   * @return {null} - null
   */
const isUser = (req, res, next) => {
  const { userId } = req;

  Business.findById(req.params.id)
    .then((business) => {
      if (business.userId !== userId) {
        return res.status(403)
          .send({
            message: 'Unauthorized',
          });
      }
      return next();
    });
};

export default isUser;

