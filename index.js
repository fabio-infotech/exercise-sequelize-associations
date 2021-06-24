const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
} = require('./controllers/patientsController');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/all', getAllPatientsPlans);
app.get('/surgeries', getAllPatientsSurgeries);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
