import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {
    handleLogs,
    handleErrors,
    handleDbConnection,
    handleRoutes
} from './middleware/index.js';
import { handleAuthentication, handleAuthenticationForAdmin } from './middleware/handleAuthentication.js';
import memberController from './controller/memberController.js';
import gymClassController from './controller/gymClassController.js';
import membershipController from './controller/membershipController.js';
import trainingLogsController from './controller/trainingLogsController.js';
import employeeController from './controller/employeeController.js';
import locationController from './controller/locationController.js';

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(handleLogs);
app.use(handleDbConnection);

//members routes
app.post("/members/login", memberController.login);
app.post("/members/signup", memberController.signup);
app.get("/members", memberController.getAllMembers);
app.get("/members/profile", memberController.getMemberDetails);
app.get("/members/activities", memberController.getMemberActivities);

//classes routes
app.get("/classes/getAllClassesByLocation", gymClassController.getAllClassesByLocation);
app.get("/classes/getEnrolledClass", gymClassController.getEnrolledClass);
app.post("/classes/postEnrolledClass", gymClassController.postEnrolledClass);
app.get("/classes", gymClassController.getAllClasses);//get All classes

//getmemebership
app.get("/getMembership", membershipController.getAllmembershipdetail);

//training logs routes
app.get("/logs/getByMemberId", trainingLogsController.getTrainingLogsByMemberId);
app.post("/checkin", trainingLogsController.checkIn);
app.get("/getCheckedInUser", trainingLogsController.getCheckedInUser);
app.put("/logs/:logId", trainingLogsController.updateTrainingLogs);
app.post("/checkout/:logId", trainingLogsController.checkOut);

// app.get("/profile", handleAuthentication, userController.fetchProfile);

//employee routes
app.post("/employees/login", employeeController.login);
app.post("/employees/signup", employeeController.signup);
app.post("/employee/postmembership", membershipController.addMembership);
app.post("/employee/addclasses", gymClassController.addClasses);


app.get("/locations", locationController.getAll);


app.use(handleRoutes);
app.use(handleErrors);

app.listen(8000, () => {
    console.log("Server running on port 8000")
});


