export default {
  Query: {
    continents: (parent, args, { models }) => {
      return models.continents
    },
    continent: (parent, { code }, { models }) => {
      return models.continents.find(continent => continent.code === code)
    },
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

  Continent: {
    countries: (continent, args, { models }) => {
      return models.countries.filter(country => country.continent.code === continent.code)
    }
  } 
}