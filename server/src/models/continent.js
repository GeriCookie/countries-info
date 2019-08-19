const continent = (sequelize, DataTypes) => {
  const Continent = sequelize.define('continent', {
    code: {
      type: DataTypes.STRING,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
    }
  })

  Continent.associate = models => {
    Continent.hasMany(models.Country, { onDelete: 'CASCADE'})
  }

  return Continent
}

export default continent