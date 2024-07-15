// routes/api/boat_status

const express = require('express');
const router = express.Router();

var storedBoatStatus = {};

// @route   GET boat_status/test
// @desc    Tests route
// @access  Public
router.get('/test', (req, res) => res.send('boat_status route testing!'));


// @route   GET boat_status/get
// @desc    Gets latest entry
// @access  Public
router.get('/get', (req, res) =>  res.send(storedBoatStatus));


// @route   POST boat_status/set
// @desc    Add/save record
// @access  Public
router.post('/set', async (req, res) => {
    try {
        // console.log(req.body.value);
        storedBoatStatus = req.body.value;
        res.status(200).json({ message: 'boat_status set successfully: ' + storedBoatStatus})
    }
    catch (err) {
        res.status(500).json({ message: 'boat_status not set successfully'});
    }
});

module.exports = router;
