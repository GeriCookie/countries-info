export default {
  Query: {
    continents: async (parent, args, { models }) => {
      return await models.Continent.findAll()
    },
    continent: async (parent, { code }, { models }) => {
      return await models.Continent.findOne({
        where: { code: code }
      })
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