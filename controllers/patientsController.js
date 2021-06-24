const { Patients, Plans, Surgeries } = require('../models');

const getAllPatientsPlans = (_req, res) =>
Patients.findAll({ include: { model: Plans, as: 'plan' } })
  .then((listOfPatients) => {
    if (!listOfPatients.length) {
      return res.status(404).send({ message: 'No patients found' });
    }
    return res.status(200).json(listOfPatients);
  })
  .catch(() => {
    return res.status(500).json({ message: 'Algo deu errado' });
  });

module.exports = {
  getAllPatientsPlans,
};
