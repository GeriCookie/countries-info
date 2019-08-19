export default {
  Query: {
    countries: (parent, args, { models }) => {
      return models.countries
    },
    country: (parent, { code }, { models }) => {
      return models.countries.find(country => country.code === code)
    }
  },

  Country: {
    continent: (country, args, { models }) => {
      return models.continents.find(continent => continent.code === country.continent.code)
    }
  },
}