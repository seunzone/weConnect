module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  User.associate = (models) => {
    // associations defined here
    User.hasMany(models.Profile, { foreignKey: 'userId', onDelete: 'CASCADE' });
    // User.hasMany(models.Review, { foreignKey: 'userId' });
  };
  return User;
};
