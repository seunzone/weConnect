export default (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
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

  Business.associate = (models) => {
    // associations defined here
    Business.belongsTo(
      models.User,
      { foreignKey: 'userId', onDelete: 'CASCADE', hooks: true }
    );
    Business.hasMany(
      models.Review,
      { foreignKey: 'businessId', onDelete: 'CASCADE', hooks: true }
    );
  };
  return Business;
};
