const country = (sequelize, DataTypes) => {
  const Country = sequelize.define('country', {
    code: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    native: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    capital: {
      type: DataTypes.STRING
    },
    currency: {
      type: DataTypes.STRING
    },
    languages: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    emoji: {
      type: DataTypes.STRING
    },
    emojiU: {
      type: DataTypes.STRING
    }
  })

  Country.associate = models => {
    Country.belongsTo(models.Continent)
  }

  return Country
}

export default country