module.exports = function(sequelize, DataTypes) {
    var Jobs = sequelize.define("Jobs", {
        job_link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        job_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        company_name: {
            type: DataTypes.STRING
        },
        job_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        applied: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: 1
        },
        phone_interview: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: 0
        },
        site_interview: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: 0
        },
        outcome: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: 0
        },
        render_location: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "applied"
        }
    });

    Jobs.associate = function(models) {
        Jobs.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Jobs;
};

module.exports = Jobs;