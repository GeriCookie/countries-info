export default {
  Query: {
    continents: async (parent, args, { models }) => {
      const continents = await models.Continent.findAll()
      await models.Stats.create(
        {
          query: 'continents',
          arguments: '',
          resultsCount: Object.keys(continents).length
        },
      )
      return continents
    },
    continent: async (parent, { code }, { models }) => {
      const continent = await models.Continent.findOne({
        where: { code: code }
      })
      await models.Stats.create(
        {
          query: 'continent',
          arguments: code,
          resultsCount: 1
        }
      )
      return continent
    },
  },

  Continent: {
    countries: async (continent, args, { models }) => {
      return await models.Country.findAll({
        where: {
          continentId: continent.id
        }
      })
    }
  } 
}