// routes/api/autopilot_parameters

const express = require('express');
const router = express.Router();

var storedAutopilotParameters = {};
var storedNewAutopilotParameters = {};

// Load Waypoint model
// const Waypoint = require('../../models/Waypoints');
// const Waypoints = require('../../models/Waypoints');

// @route   GET /test
// @desc    Tests route
// @access  Public
router.get('/test', (req, res) => res.send('autopilot_parameters route testing!'));


// @route   GET /get
// @desc    Gets latest entry
// @access  Public
router.get('/get', (req, res) => res.send(storedAutopilotParameters));

// @route   GET /get_new
// @desc    Gets latest entry if the latest entry hasn't already been seen. If the latest entry has been seen, then simply send an empty dictionary.
//          This helps save on LTE data since we aren't sending data to the boat if it has already seen it.
// @access  Public
router.get('/get_new', (req, res) => {
  res.send(storedNewAutopilotParameters); 
  storedNewAutopilotParameters = {};
});

// @route   POST /set
// @desc    Add/save record
// @access  Public
router.post('/set', async (req, res) => {
  try {
    storedAutopilotParameters = req.body.value;
    storedNewAutopilotParameters = req.body.value;
    return res.status(200).json({ message: 'autopilot_parameters set successfully: ' + storedAutopilotParameters})
  }
  catch (err) {
    return res.status(500).json({ message: 'autopilot_parameters not set successfully'});
  }
});


// @route   POST /delete
// @desc    deletes the current record (aka sets it to an empty dict {})
// @access  Public
router.post('/delete', async (req, res) => {
  storedAutopilotParameters = {};
  storedNewAutopilotParameters = {};
  return res.status(200).json({ message: 'autopilot_parameters deleted successfully'})
});



module.exports = router;
