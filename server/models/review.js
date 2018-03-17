export default (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  });
  Review.associate = (models) => {
    // associations defined here
    Review.belongsTo(
      models.User,
      { foreignKey: 'userId', onDelete: 'CASCADE' }
    );
    Review.belongsTo(
      models.Profile,
      { foreignKey: 'profileId', onDelete: 'CASCADE' }
    );
  };
  return Review;
};
