// routes/api/motor_data_test

const express = require('express');
const router = express.Router();

var storedMotorData = {};
var storedImageData = [];

// @route   GET waypoints/test
// @desc    Tests route
// @access  Public
router.get('/test', (req, res) => res.send('Motor data testing!'));


// @route   GET waypoints/get
// @desc    Gets latest entry
// @access  Public
router.get('/get', (req, res) =>  res.send(storedMotorData));


// @route   POST waypoints/store
// @desc    Add/save record
// @access  Public
router.post('/store', async (req, res) => {
    // try {
    console.log("I'm storing!!! :D :D ;D");
    //     // console.log(req.body.value);
    //     imageDic = req.body.images;
    //     imageDicKeys = Object.keys(imageDic);
    //     imageString = "";
    //     // imageNum = 1;
    //     // const{name, data} = req.body;
    //     for (let i = 0; i < imageDicKeys.length; i++) {
    //         storedImageData.push(imageDic[imageDicKeys[i]]);
    //         imageString += "" + imageDic[imageDicKeys[i]] + ", ";
    //     }

    //     imageString = imageString.substring(0, imageString.length - 2);
    //     res.status(200).json({ message: 'pictures set successfully: ' + storedImageData });
    // } catch (err) {
    //     res.status(500).json({ message: 'pictures not set successfully'});
    // }

    // Example usage:
    // const binaryData = [
    //     0, 1, 0, 1, 0, 1,
    //     1, 0, 1, 0, 1, 0,
    //     0, 1, 0, 1, 0, 1
    // ];

    // createImageFromBinary(binaryData, 6, 3);
});

// function createImageFromBinary(binaryData, width, height) {
//     const canvas = document.createElement('canvas');
//     canvas.width = width;
//     canvas.height = height;
//     const ctx = canvas.getContext('2d');
  
//     const imageData = ctx.createImageData(width, height);
//     const data = imageData.data;
  
//     for (let i = 0; i < binaryData.length; i++) {
//       const pixelIndex = i * 4;
//       const value = binaryData[i] === 1 ? 255 : 0;
  
//       data[pixelIndex] = value;    // Red
//       data[pixelIndex + 1] = value;  // Green
//       data[pixelIndex + 2] = value;  // Blue
//       data[pixelIndex + 3] = 255;  // Alpha
//     }
  
//     ctx.putImageData(imageData, 0, 0);
  
//     const img = document.createElement('img');
//     img.src = canvas.toDataURL();
//     document.body.appendChild(img);
//   }

// // @route   POST waypoints/delete
// // @desc    deletes the current record (aka sets it to an empty dict {})
// // @access  Public
// router.post('/delete', async (req, res) => {
//     storedMotorData = {};
//     return res.status(200).json({ message: 'waypoints deleted successfully'})
// });

module.exports = router;
