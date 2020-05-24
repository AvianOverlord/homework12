const Workout = require("../models/workoutModel");
const Activity = require("../models/activityModel");

const WorkoutCntrl = {
    getAll(req,res){
        Workout.findAll().then(data => {
            return res.json(data);
        });
    },
    saveWorkout(req,res){
        Workout.create({workoutName: req.body.name, date: req.body.day},{include:[{association: Activity, include:[req.body.activities]}]}).then(data => {
            return res.json(data);
        });
    }
}

module.exports = WorkoutCntrl;