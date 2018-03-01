import db from '../models/faker';

/**
 *
 *
 * @class Profile
 */
class Profile {
  /**
       *
       *
       * @param {any} req
       * @param {any} res
       * @returns {json} adds a business
       * @memberof Profile
       */
  addProfile(req, res) {
    const {
      name, details, location, category
    } = req.body;

    const id = db.profile.length + 1;
    const newProfile = {
      id,
      name,
      details,
      category,
      location
    };
    db.profile.push(newProfile);
    return res.status(201)
      .json({
        status: 'sucess',
        message: 'profile added',
        profile: newProfile
      });
  }
  /**
     * edit business
     * @param {object} req expres req object
     * @param {object} res exp res object
     * @returns {json} json
     * @memberof Profile
     */
  editProfile(req, res) {
    const { id } = req.params;
    let editProfile;

    db.profile.forEach((profile) => {
      if (profile.id === parseInt(id, 10)) {
        profile.name = req.body.name || profile.name;
        profile.details = req.body.details || profile.details;
        profile.category = req.body.category || profile.category;
        profile.location = req.body.location || profile.location;

        editProfile = profile;
      }
    });
    if (editProfile) {
      return res.status(200).json({
        status: 'success',
        message: 'Profile modified',
        profile: editProfile
      });
    }
    return res.status(404).send(`profile with id ${id} not found`);
  }
}

const profile = new Profile();

export default profile;
