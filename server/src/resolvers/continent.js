export default {
  Query: {
    continents: (parent, args, { models }) => {
      return models.continents
    },
    continent: (parent, { code }, { models }) => {
      return models.continents.find(continent => continent.code === code)
    },
  },

  Continent: {
    countries: (continent, args, { models }) => {
      return models.countries.filter(country => country.continent.code === continent.code)
    }
  } 
}