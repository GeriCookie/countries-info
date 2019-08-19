export default {
  Query: {
    countries: async (parent, args, { models }) => {
      const countries = await models.Country.findAll()
      await models.Stats.create(
        {
          query: 'countries',
          arguments: '',
          resultsCount: Object.keys(countries).length
        },
      )
      return countries
    },
    country: async (parent, { code }, { models }) => {
      const country = await models.Country.findOne({
        where: { code: code }
      })
      await models.Stats.create(
        {
          query: 'country',
          arguments: code,
          resultsCount: 1
        }
      )
      return country
    }
  },

  Country: {
    continent: async (country, args, { models }) => {
      return await models.Continent.findByPk(country.continentId)
    }
  },
}