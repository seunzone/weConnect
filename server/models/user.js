module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Oops. An account already exist with this username',
      },
      validate: {
        len: {
          args: [3, 10],
          msg: 'Username must be btw 3 - 10 characters',
        },
        is: {
          args: /^[A-Za-z][A-Za-z0-9-]+$/i,
          msg: 'Username must start with a letter, have no spaces',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Oops.The email you entered already exists',
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'The email you entered is not valid',
        },
        max: {
          args: 100,
          msg: 'The email you entered is invalid or longer than 100 characters.',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6],
          msg: 'The password you entered is less than 6 characters',
        },
      },
    },
  });

  User.associate = (models) => {
    // associations defined here
    User.hasMany(models.Profile, { foreignKey: 'userId', onDelete: 'CASCADE' });
    User.hasMany(models.Review, { foreignKey: 'userId' });
  };
  return User;
};
