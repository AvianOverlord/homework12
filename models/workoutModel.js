module.exports = function (sequelize, DataTypes) {
    var Workout = sequelize.define("Workout", {
      workoutName: {
        type: DataTypes.STRING, //Check this in datatypes
        allowNull: false,
        validate: {
            len: [1]
        }
      },
      date: {
          type: DataTypes.DATE,
          allowNull: false
      }
    });

    Workout.associate = function(models){
        Workout.hasMany(models.Activity,{
            onDelete: "cascade"
          });
    };
    return Workout;
  };