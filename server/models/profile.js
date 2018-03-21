export default (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    location: {
      type: DataTypes.STRING,
      allowNull: true
    },

    category: {
      type: DataTypes.STRING,
      allowNull: true
    }


  });

  Profile.associate = (models) => {
    // associations defined here
    Profile.belongsTo(
      models.User,
      { foreignKey: 'userId', onDelete: 'CASCADE', hooks: true }
    );
    Profile.hasMany(
      models.Review,
      { foreignKey: 'profileId', onDelete: 'CASCADE', hooks: true }
    );
  };
  return Profile;
};
