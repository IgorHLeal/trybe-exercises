module.exports = (sequelize, DataTypes) => {
  const Surgeries = sequelize.define('Surgeries', {
    surgerieId: { type: DataTypes.INTEGER, primaryKey: true },
    specialty: DataTypes.STRING,
    doctor: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
  });

  return Surgeries;
};