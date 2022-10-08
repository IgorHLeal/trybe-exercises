const { Patients, Plans } = require('../models');

const getPatientsPlanId = (req, res) => {
  const { id } = req.params;
  Plans.findAll({
    where: {plan_id: id},
    include: [{ model: Patients, as: 'patients', through: { attributes: [] } }],
  })
  .then((listPatients) => {
    if (!listPatients.length) {
      return res.status(404).send({ message: 'Plan not found'});
    }
    return res.status(200).json(listPatients);
  })
  .catch(() => res.status(500).json({ message: 'Algo deu errado' }))
}

module.exports = {
  getPatientsPlanId,
};