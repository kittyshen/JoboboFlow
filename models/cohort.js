
module.exports = function (sequelize, DataTypes) {
  var Cohort = sequelize.define('Cohort', {
    cohortName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'general', 
      validate: {
        len: [1-30]
      }
    }
  });

  Cohort.associate = function(models) {
    Cohort.belongsTo(models.Administrator, {
      foreignKey: {
        allowNull: false
      }
    });
    Cohort.hasMany(models.User, {
      onDelete: "cascade"
    });
  }

  return Cohort;
};
