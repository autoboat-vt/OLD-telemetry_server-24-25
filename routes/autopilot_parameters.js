// routes/api/autopilot_parameters

const express = require('express');
const router = express.Router();

var storedAutopilotParameters = "";


// Load Waypoint model
// const Waypoint = require('../../models/Waypoints');
// const Waypoints = require('../../models/Waypoints');

// @route   GET autopilot_parameters/test
// @desc    Tests route
// @access  Public
router.get('/test', (req, res) => res.send('autopilot_parameters route testing!'));


// @route   GET autopilot_parameters/get
// @desc    Gets latest entry
// @access  Public
router.get('/get', (req, res) => res.send(storedAutopilotParameters));


// @route   POST autopilot_parameters/set
// @desc    Add/save record
// @access  Public
router.post('/set', async (req, res) => {
  try {
    // console.log(req.body.value);
    storedAutopilotParameters = req.body.value;
    return res.status(200).json({ message: 'autopilot_parameters set successfully: ' + storedAutopilotParameters})
  }
  catch (err) {
    return res.status(500).json({ message: 'autopilot_parameters not set successfully'});
  }
});

module.exports = router;

// // @route   GET api/wp/one/all
// // @desc    Gets all entries of type 1 
// // @access  Public
// router.get('/one/all', (req, res) => {
//   Waypoint.find({kind: 1}).sort({ createdAt: -1})
//     .then(waypoints => res.json(waypoints))
//     .catch(err => res.status(404).json({ error: 'No Waypoints found' }));
// });

// // @route   GET api/wp/two/all
// // @desc    Gets all entries of type 2 
// // @access  Public
// router.get('/two/all', (req, res) => {
//   Waypoint.find({kind: 2}).sort({ createdAt: -1})
//     .then(waypoints => res.json(waypoints))
//     .catch(err => res.status(404).json({ error: 'No Waypoints found' }));
// });


// // @route   POST api/wp/two
// // @desc    Add/save record
// // @access  Public
// router.post('/two', async (req, res) => {
//   if (twoSize >= MAX_SIZE)
//   {
//     try 
//     {
//       const oldestOne = await Waypoint.findOne({ kind: 2}).sort({ createdAt: 1 });
//       if (oldestOne)
//       {
//         await Waypoint.findByIdAndDelete(oldestOne._id);
//         oneSize--;
//       }
//     }
//     catch (err) 
//     {
//       return res.status(500).json({ message: 'Error removing oldest waypoint'});
//     }
//   }
//   const waypoint = new Waypoint({
//         w: req.body.w,
//         kind: 2
//     });

//   try {
//     const newWaypoint = waypoint.save();
//     twoSize++;
//     res.status(200).json({ message: 'Waypoint added successfully'});
//   }
//   catch (err) 
//   {
//     res.status(400).json({ message: 'Unable to add waypoint'});
//   }
// });

// // @route   DELETE api/wp
// // @desc    Delete all records
// // @access  Public
// router.delete('/deleteAll', (req, res) => {
//   Waypoint.deleteMany({})
//     .then(() => res.json({ msg: 'All waypoints of all types deleted successfully' }))
//     .catch(err => res.status(500).json({ error: 'Unable to delete waypoints' }));
//   size = 0;
// });

