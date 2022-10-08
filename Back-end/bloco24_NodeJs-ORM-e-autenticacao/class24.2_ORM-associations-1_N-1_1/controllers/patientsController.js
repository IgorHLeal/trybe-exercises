const { Patients, Plans, Surgeries } = require('../models');

const getAllPatientsPlans = (_req, res) => {
  Patients.findAll({ include: { model: Plans, as: 'plan' } })
  .then((listPatients) => {
    if (!listPatients.length) {
      return res.status(404).send({ message: 'Patients not found'});
    }
    return res.status(200).json(listPatients);
  })
  .catch(() => res.status(500).json({ message: 'Algo deu errado' }))
};

const getAllPatientsSurgeries = (_req, res) => {
  Patients.findAll({ include: { model: Surgeries, as: 'surgeries', through: { attributes: [] } },
  })
  .then((listPatients) => {
    if (!listPatients.length) {
      return res.status(404).send({ message: 'Patients not found'});
    }
    return res.status(200).json(listPatients);
  })
  .catch(() => res.status(500).json({ message: 'Algo deu errado' }))
};

const createNewPatient = async (req, res) => {
  const { fullname, plan_id } = req.body;
  await Patients.create({ fullname, plan_id })
    .then((response) => res.status(200).json(response))
    .catch(() => res.status(500).json({ message: 'Algo deu errado' }));
};

const getAllPatientsSurgeriesNotDoctor = (_req, res) => {
  Patients.findAll({
    include: { model: Surgeries, as: 'surgeries',
    attributes: { exclude: ['doctor'] },
    through: { attributes: [] } },
  })
  .then((listPatients) => {
    if (listPatients === null) {
      return res.status(404).send({ message: 'Patients not found'});
    }
    return res.status(200).json(listPatients);
  })
  .catch(() => res.status(500).json({ message: 'Algo deu errado' }))
};

module.exports = {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  createNewPatient,
  getAllPatientsSurgeriesNotDoctor,
};