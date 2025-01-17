const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  createPatients,
  getPatientsAndSurgeriesNoDoctor,
} = require('./controllers/patientsController');
const getAllPlans = require('./controllers/plansController');
const getDoctorSurgeries = require('./controllers/surgeriesController');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/all', getAllPatientsPlans);
app.get('/surgeries', getAllPatientsSurgeries);
app.get('/:id', getAllPlans);
app.post('/', createPatients);
app.get('/surgeries/nodoctor', getPatientsAndSurgeriesNoDoctor);
app.get('/surgeries/:name', getDoctorSurgeries);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
