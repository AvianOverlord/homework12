// This is an example of a Controller. Note how it requires in the model(s) it needs.

const Activity = require("../models/activityModel.js");

const ActivityCntrl = {
  // This is called (when needed) from the route page when a 
  // listing of all exercises is needed
  saveActivity(req,res){
    Activity.create({activityName: req.body.activityName, duration: req.body.duration, weight: req.body.weight, sets: req.body.sets, reps: req.body.reps, distance: req.body.distance})
  }
}

// -- WE ARE EXPORTING (MAKING AVAILABLE TO OTHER FILES) THE CONTROLLER LOGIC (OBJECT & METHODS) -- //
module.exports = ActivityCntrl;