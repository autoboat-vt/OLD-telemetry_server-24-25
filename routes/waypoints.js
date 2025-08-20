// routes/api/waypoint

const express = require('express');
const router = express.Router();

var storedWaypoints = {};
var storedNewWaypoints = {};

// @route   GET waypoints/test
// @desc    Tests route
// @access  Public
router.get('/test', (req, res) => res.send('waypoints route testing!'));


// @route   GET waypoints/get
// @desc    Gets latest entry
// @access  Public
router.get('/get', (req, res) =>  res.send(storedWaypoints));


// @route   GET /get_new
// @desc    Gets latest entry if the latest entry hasn't already been seen. If the latest entry has been seen, then simply send an empty dictionary.
//          This helps save on LTE data since we aren't sending data to the boat if it has already seen it.
// @access  Public
router.get('/get_new', (req, res) => {
  res.send(storedNewWaypoints); 
  storedNewWaypoints = {};
});


// @route   POST waypoints/set
// @desc    Add/save record
// @access  Public
router.post('/set', async (req, res) => {
    try {
        storedWaypoints = req.body.value;
        res.status(200).json({ message: 'waypoints set successfully: ' + req.body.value})
    }
    catch (err) {
        res.status(500).json({ message: 'waypoints not set successfully'});
    }
});

// @route   POST waypoints/delete
// @desc    deletes the current record (aka sets it to an empty dict {})
// @access  Public
router.post('/delete', async (req, res) => {
    storedWaypoints = {};
    storedNewWaypoints = {};
    return res.status(200).json({ message: 'waypoints deleted successfully'})
});

module.exports = router;
