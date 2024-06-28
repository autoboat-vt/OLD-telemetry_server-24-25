// routes/api/waypoint

const express = require('express');
const router = express.Router();

var storedWaypoint = "";

// @route   GET waypoint/test
// @desc    Tests route
// @access  Public
router.get('/test', (req, res) => res.send('waypoints route testing!'));


// @route   GET waypoint/get
// @desc    Gets latest entry
// @access  Public
router.get('/get', (req, res) =>  res.send(storedWaypoint));


// @route   POST waypoint/set
// @desc    Add/save record
// @access  Public
router.post('/set', async (req, res) => {
    try {
        // console.log(req.body.value);
        storedWaypoint = req.body.value;
        res.status(200).json({ message: 'waypoint set successfully: ' + storedWaypoint})
    }
    catch (err) {
        res.status(500).json({ message: 'waypoint not set successfully'});
    }
});

module.exports = router;
