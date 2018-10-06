/*eslint-disable */
import db from '../models';

const { Contact } = db;

export default class contactController {
  static addInfo(req, res) {
    const {
      name, email, purpose, message
    } = req.body;
    Contact.create({
      name,
      email,
      purpose,
      message
    }).then(contactInfo => res.status(201).json({
      status: 'success',
      message: 'Info created successfully',
      Contact: contactInfo
    }))
    // .catch(() =>
    //     res.status(500).json({
    //       status: 'error',
    //       message: 'Internal server error'
    //     }));
  }

  static getAllInfo(req, res) {
    return Contact.all()
      .then(contactInfo => res.status(200).send(contactInfo))
      .catch(error => res.status(400).send(error));
  }
}

