// models/UserBook.js
module.exports = (sequelize, _DataTypes) => {
  const PatientSurgeries = sequelize.define('Patient_surgeries',
    {},
    { timestamps: false },
  );

  PatientSurgeries.associate = (models) => {
    models.Patients.belongsToMany(models.Surgeries, {
      as: 'Surgeries',
      through: PatientSurgeries,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });
    models.Surgeries.belongsToMany(models.Patients, {
      as: 'Patients',
      through: PatientSurgeries,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });
  };

  return PatientSurgeries;
};