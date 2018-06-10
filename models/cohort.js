
module.exports = function (sequelize, DataTypes) {
  var Cohort = sequelize.define('Cohort', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Cohort.associate = function(models) {
    Cohort.belongsTo(models.Administrator, {
      foreignKey: {
        allowNull: false
      }
    });
  }

  return Cohort;
};
