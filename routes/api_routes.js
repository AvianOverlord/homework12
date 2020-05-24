const express = require('express')
// -- BRING IN THE `EXPRESS ROUTER` -- //
const router = express.Router()

const ExerciseCntrl = require('../controllers/exerciseCntrl');
const WorkoutCntrl = require("../controllers/workoutCntrl");

// -- USE MVC ARCHITECTURE --> HAVE CLEAN ROUTES AND MOVE THE LOGIC TO THE /CONTROLLERS DIRECTORY -- //


// GET  "/""
// Calls controller which will return all activities for a specific workout
router.get("/exercise", ExerciseCntrl.getAll);

router.get("/workout", WorkoutCntrl.getAll);
router.post("/workout",WorkoutCntrl.saveWorkout);


// -- ADD ADDITIONAL ROUTES -- //

module.exports = router

