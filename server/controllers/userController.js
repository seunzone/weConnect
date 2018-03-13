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

    return User
      .create({
        username,
        email,
        password
      })
      .then((user) => {
        const token = makeToken({ user });
        res.status(201).json({
          message: 'signup sucessful',
          token
        });
      })
      .catch(() => res.status(500).json({
        status: false,
        message: 'Internal sever Error'
      }));
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
      .then((findUser) => {
        if (!findUser) {
          return res.status(404)
            .json({
              status: 'fail',
              message: 'user does not exist',
            });
        }
        if (!bcrypt.compareSync(password, findUser.password)) {
          return res.status(401)
            .json({
              status: 'fail',
              message: 'You entered a wrong password'
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
      .catch(() => res.status(500).json({
        status: 'error',
        message: 'Internal server error'
      }));
  }
}
