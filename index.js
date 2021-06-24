const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const {
  getAllPatientsPlans,
} = require('./controllers/patientsController');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/all', getAllPatientsPlans);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
