// app.js
// import { addRxPlugin } from 'rxdb';
// import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
// addRxPlugin(RxDBDevModePlugin);

const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");

const autopilotParametersRoutes = require("./routes/autopilot_parameters");
const boatStatus = require("./routes/boat_status");
const waypoints = require("./routes/waypoints");
const boatPublicIP = require("./routes/boat_public_ip")
const motorDataTest = require("./routes/motor_data_test")

const app = express();

// use the cors middleware with the origin and credentials options
app.use(cors({ origin: true, credentials: true }));

// use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '500mb' }));

// use the routes module as a middleware
app.use("/waypoints", waypoints);
app.use("/autopilot_parameters", autopilotParametersRoutes);
app.use("/boat_status", boatStatus);
app.use("/boat_public_ip", boatPublicIP);
app.use("/motor_data_test", motorDataTest);

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));
