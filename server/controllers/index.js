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
  /**
   * delete business
   * @param {object} req expres req object
   * @param {object} res exp res object
   * @returns {json} json
   * @memberof Profile
   */
  deleteProfile(req, res) {
    for (let i = 0; i < db.profile.length; i += 1) {
      if (parseInt(db.profile[i].id, 10) === parseInt(req.params.id, 10)) {
        db.profile.splice(i, 1);
        return res.status(200)
          .json({
            status: 'success',
            message: 'Your business detials has been deleted'
          });
      }
    }
    return res.status(404)
      .send('Busines not found');
  }
  /**
   *
   * get details of all businesses
   * @param {any} req
   * @param {any} res
   * @returns {json}gets all businesses
   * @memberof Profile
   */
  getAllProfile(req, res) {
    res.status(200).json({
      profiles: db.profile,
      status: 'success'
    });
  }
  /**
   *
   *get business details
   * @param {any} req
   * @param {any} res
   * @returns {json}gets single
   * @memberof centers
   */
  getProfileById(req, res) {
    for (let i = 0; i < db.profile.length; i++) {
      if (db.profile[i].id === parseInt(req.params.id)) {
        return res.status(200).json({
          profileId: db.profile[i],
          message: 'success',
          error: false
        });
      }
    }
    res.status(404).json({
      message: 'Business not found',
      error: true
    });
  }
}

const profile = new Profile();

export default profile;
