module.exports = (sequelize, DataTypes) => {
  const Patients = sequelize.define('Patients', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fullname: DataTypes.STRING,
    planId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    underscored: true,
  });

  Patients.associate = (models) => {
    Patients.belongsTo(models.Plans,
      { foreignKey: 'plan_id', as: 'plans' });
  };

  return Patients;
};