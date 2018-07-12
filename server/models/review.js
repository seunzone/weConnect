export default (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    businessId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1, max: 5 }
    },
  });
  Review.associate = (models) => {
    // associations defined here
    Review.belongsTo(
      models.User,
      { foreignKey: 'userId', onDelete: 'CASCADE' }
    );
    Review.belongsTo(
      models.Business,
      { foreignKey: 'businessId', onDelete: 'CASCADE' }
    );
  };
  return Review;
};
