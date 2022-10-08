const { Patients, Surgeries } = require('../models');

const getDoctorAndSurgeries = (req, res) => {
  Surgeries.findAll({
    where: { doctor: req.params.name },
    include: [{ model: Patients, as: 'patients', through: { attibutes: [] } }],
  })
    .then((listPatients) => {
      if (listPatients === null) {
        return res.status(404).send({ message: 'Patients not found'});
      }
      return res.status(200).json(listPatients);
    })
    .catch(() => res.status(500).json({ message: 'Algo deu errado' }))
}

module.exports = {
  getDoctorAndSurgeries,
};