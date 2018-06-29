import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.load();
const key = process.env.MY_SECRET;

/**
   * @description - Checks if logged in user has valid AUTH token
   *
   * @param  {Object} req - request
   *
   * @param  {object} res - response
   *
   * @param {Object} next - Call back function
   *
   * @return {null} - null
   */
const isLoggedIn = (req, res, next) => {
  const token = req.body.token || req.headers.token || req.query.token || req.headers.authorization;

  try {
    const verifiedToken = jwt.verify(token, key);
    req.userId = verifiedToken.id;
    return next();
  } catch (error) {
    return res.status(401).send({ message: 'You must be logged in to perform this action.' });
  }
};

export default isLoggedIn;
