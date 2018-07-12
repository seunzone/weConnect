import bcrypt from 'bcrypt';
import db from '../models';
import makeToken from '../helpers/token';

const { User } = db;

/**
 * @class usersController
 *
 * @export
 *
 */
export default class usersController {
  /**
     * @description - Creates a new user
     * @static
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     *
     * @memberof usersController
     *
     * @returns {object} Class instance
     */
  static createUser(req, res) {
    const password = bcrypt.hashSync(req.body.password, 10);
    const {
      username, email
    } = req.body;

    const conflict = {};
    return User
      .create({
        username,
        email,
        password
      })
      .then((newUser) => {
        const token = makeToken(newUser);
        return res.status(201)
          .json({
            status: 'success',
            message: 'signup sucessful',
            user: {
              username: newUser.username,
              email: newUser.email,
              id: newUser.id
            },
            token
          });
      })
      .catch((error) => {
        if (error.errors[0].path === 'username') {
          conflict.usernameConflict = error.errors[0].message;
        }

        if (error.errors[0].path === 'email') {
          conflict.emailConflict = error.errors[0].message;
        }

        return res.status(409).json(conflict);
      });
  }


  /**
     * @description - Login a user
     * @static
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     *
     * @memberof usersController
     *
     * @returns {object} Class instance
     */
  static userLogin(req, res) {
    const { email, password } = req.body;

    User.findOne({
      where: {
        email
      }
    })
    // return error message if user does not exist
      .then((findUser) => {
        if (!findUser) {
          return res.status(404)
            .json({
              status: 'fail',
              message: 'username or password is incorrect',
            });
        }
        // return error message if user does not sync with password
        if (!bcrypt.compareSync(password, findUser.password)) {
          return res.status(401)
            .json({
              status: 'fail',
              message: 'username or password is incorrect'
            });
        }
        const token = makeToken(findUser);
        return res.status(200)
          .json({
            status: 'success',
            token,
            foundUser: {
              username: findUser.username,
              email: findUser.email,
              id: findUser.id
            }
          });
      })
      .catch(error => res.status(500).json({
        status: 'error',
        message: 'Internal server error',
        error
      }));
  }
}
