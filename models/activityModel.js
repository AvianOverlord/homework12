module.exports = function (sequelize, DataTypes) {
    var Activity = sequelize.define("Activity", {
      activityName:{
        type: DataTypes.STRING, //Check this in datatypes
        allowNull: false,
        validate: {
            len: [1]
        },
      },
      duration: {
        type: DataTypes.FLOAT, //Check this in datatypes
        allowNull: true
      },
      weight: {
          type: DataTypes.FLOAT,
          allowNull: true
      },
      sets: {
        type: DataTypes.INTEGER,
        allowNull: true
        },
      reps: {
        type: DataTypes.INTEGER,
        allowNull: true
        },
      distance: {
            type: DataTypes.FLOAT,
            allowNull: true
        }
    });

    Activity.associate = function(models){
        Activity.belongsTo(models.Exercise, {
            foreignkey: {
                allowNull: false
            }
        });
    };
    return Activity;
  };