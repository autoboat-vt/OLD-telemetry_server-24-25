// routes/api/boat_status

const express = require('express');
const router = express.Router();

var storedBoatStatus = {};
var storedNewBoatStatus = {};

// @route   GET boat_status/test
// @desc    Tests route
// @access  Public
router.get('/test', (req, res) => res.send('boat_status route testing!'));


// @route   GET boat_status/get
// @desc    Gets latest entry
// @access  Public
router.get('/get', (req, res) =>  res.send(storedBoatStatus));


// @route   GET /get_new
// @desc    Gets latest entry if the latest entry hasn't already been seen. If the latest entry has been seen, then simply send an empty dictionary.
//          This helps save on LTE data since we aren't sending data to the boat if it has already seen it.
// @access  Public
router.get('/get_new', (req, res) => {
  res.send(storedNewBoatStatus); 
  storedNewBoatStatus = {};
});

// @route   POST boat_status/set
// @desc    Add/save record
// @access  Public
router.post('/set', async (req, res) => {
    try {
        storedBoatStatus = req.body.value;
        storedNewBoatStatus = req.body.value;
        res.status(200).json({ message: 'boat_status set successfully: ' + storedBoatStatus})
    }
    catch (err) {
        res.status(500).json({ message: 'boat_status not set successfully'});
    }
});

module.exports = router;
