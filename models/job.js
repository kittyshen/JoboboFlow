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
        job_description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        job_experience_level: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        job_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        job_skill1: {
            type: DataTypes.STRING,
            allowNull: true
        },
        job_skill2: {
            type: DataTypes.STRING,
            allowNull: true
        }, 
        job_skill3: {
            type: DataTypes.STRING,
            allowNull: true
        },
        job_salary_min: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        job_salary_max: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        job_visa_sponsorship: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        applied: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
            default: false
        },
        phone_interview: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
            default: false
        },
        site_interview: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
            default: false
        },
        offer: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
            default: false
        },
        reject: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
            default: false
        },
        no_response: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
            default: false
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

