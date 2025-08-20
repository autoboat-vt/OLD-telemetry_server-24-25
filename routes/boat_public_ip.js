// routes/api/boat_public_ip

const express = require('express');
const router = express.Router();

var storedBoatPublicIP = {};

// @route   GET boat_public_ip/test
// @desc    Tests route
// @access  Public
router.get('/test', (req, res) => res.send('boat_public_ip route testing!'));


// @route   GET boat_public_ip/get
// @desc    Gets latest entry
// @access  Public
router.get('/get', (req, res) =>  res.send(storedBoatPublicIP));


// @route   POST boat_public_ip/set
// @desc    Add/save record
// @access  Public
router.post('/set', async (req, res) => {
    try {
        // console.log(req.body.value);
        storedBoatPublicIP = req.body.value;
        res.status(200).json({ message: 'boat_public_ip set successfully: ' + storedBoatPublicIP})
    }
    catch (err) {
        res.status(500).json({ message: 'boat_public_ip not set successfully'});
    }
});

module.exports = router;
