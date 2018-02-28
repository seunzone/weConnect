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

}

const profile = new Profile();

export default profile;