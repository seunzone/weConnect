import bcrypt from 'bcrypt';
import { db } from '../models';
import makeToken from '../helpers/token';

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
    const {
      username, email, password
    } = req.body;

    db.User.findOne({
      where: {
        email
      }
    }).then((alreadyUser) => {
      if (alreadyUser) {
        return res.status(409)
          .json({
            status: 'fail',
            message: 'Email already exist',
          });
      }
      return db.User
        .create({
          username,
          email,
          password
        })
        .then((newUser) => {
          const token = makeToken(newUser);
          res.status(201)
            .json({
              status: 'success',
              message: 'Account created',
              user: {
                username: newUser.username,
                email: newUser.email,
                id: newUser.id
              },
              token
            });
        });
    })
      .catch(() => res.status(500).json({
        status: 'error',
        message: 'Internal server error'
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

    db.User.findOne({
      where: {
        email
      }
    })
      .then((findUser) => {
        if (!findUser) {
          return res.status(404)
            .json({
              status: 'fail',
              message: 'You seem not to be part of us',
            });
        }
        if (!bcrypt.compareSync(password, findUser.password)) {
          return res.status(401)
            .json({
              status: 'fail',
              message: 'You seem not to be part of us'
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

