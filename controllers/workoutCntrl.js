const Workout = require("../models/workoutModel");

const WorkoutCntrl = {
    getAll(req,res){
        Workout.findAll().then(data => {
            return res.json(data);
        });
    }
}

module.exports = WorkoutCntrl;