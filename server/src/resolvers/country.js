export default {
  Query: {
    countries: async (parent, args, { models }) => {
      return await models.Country.findAll()
    },
    country: async (parent, { code }, { models }) => {
      return await models.Country.findOne({
        where: { code: code }
      })
    }
  },

  Country: {
    continent: async (country, args, { models }) => {
      return await models.Continent.findByPk(country.continentId)
    }
  },
}