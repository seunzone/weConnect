export default (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    name: {
      type: DataTypes.STRING,
    },

    email: {
      type: DataTypes.STRING
    },

    purpose: {
      type: DataTypes.STRING,
    },

    message: {
      type: DataTypes.TEXT,
    },
  });
  return Contact;
};
