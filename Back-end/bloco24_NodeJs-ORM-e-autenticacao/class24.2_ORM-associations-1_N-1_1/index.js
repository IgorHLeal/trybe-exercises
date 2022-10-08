const express = require('express');
const bodyParser = require('body-parser');

const {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  createNewPatient,
  getAllPatientsSurgeriesNotDoctor,
} = require('./controllers/patientsController');

const { getPatientsPlanId } = require('./controllers/plansController');
const { getDoctorAndSurgeries } = require('./controllers/surgeriesController');


const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/all', getAllPatientsPlans);
app.get('/surgeries', getAllPatientsSurgeries);
app.get('/:id', getPatientsPlanId);
app.post('/', createNewPatient);
app.get('/surgeries/notdoctor', getAllPatientsSurgeriesNotDoctor);
app.get('/surgeries/:name', getDoctorAndSurgeries);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});