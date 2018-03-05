import bcrypt from 'bcrypt';
import user from '../models/userfaker';

/**
 *
 *
 * @class Auth
 */
class Auth {
  /**
     *
     *
     * @param {any} req
     * @param {any} res
     * @returns {json} signup a new user
     * @memberof Auth
     */
  signUp(req, res) {
    const { username } = req.body;
    const password = bcrypt.hashSync(req.body.password, 10);
    if (!username || !password) {
      return res.status(400).json({
        message: 'All fields must be filled',
        error: true
      });
    }
    user.push(req.body);
    return res.status(200).json({
      message: 'User registered successfully',
      error: false
    });
  }
  /**
     *
     *
     * @param {any} req
     * @param {any} res
     * @returns {json} login new user
     * @memberof Auth
     */
  login(req, res) {
    const { username, password } = req.body;
    user.profile.forEach((input) => {
      if (username === input.username && password === input.password) {
        return res.status(200).json({
          message: 'Successfully logged in user',
          error: false
        });
      }
    });
    res.status(400).json({
      message: 'Error logining in',
      error: true
    });
  }
}


const auth = new Auth();

export default auth;
