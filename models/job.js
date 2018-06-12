module.exports = function(sequelize, DataTypes) {
    var Job = sequelize.define("Job", {
        job_link: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        job_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        company_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        applied: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: true
        },
        phone_interview: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: false
        },
        site_interview: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: false
        },
        outcome: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: false
        },
        loc1: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: true
        },
        loc2: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: false
        },
        loc3: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: false
        },
        loc4: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: false
        },
        hide:{
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: false
        }
    });

    Job.associate = function(models) {
        Job.belongsTo(models.User, {
            foreignKey: {
                allowNull: true
            }
        });
    }

    return Job;
};

