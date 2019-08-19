import cors from 'cors'
import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

import { continents, countries, languages } from 'countries-list'

const app = express()

app.use(cors())

const getCountries = () => {
  const countriesArr = Object.entries(countries)
  const countriesList = []
  for (const [code, countryObj] of countriesArr) {
    const continent = {
      code: countryObj.continent,
      name: continents[countryObj.continent]
    }
    const languagesArr = []
    countryObj.languages.forEach(languageCode => languagesArr.push(languages[languageCode].name))
    const country = {
      code: code,
      name: countryObj.name,
      native: countryObj.native,
      phone: countryObj.phone,
      continent: continent,
      capital: countryObj.capital,
      currency: countryObj.currency,
      languages: languagesArr,
      emoji: countryObj.emoji,
      emojiU: countryObj.emojiU
    }
    countriesList.push(country)
  }
  return countriesList
}

 const getContinents = () => {
  const continentsArr = Object.entries(continents)
  const continentsList = []
  const countriesArray = getCountries()
  for (const [code, continentName] of continentsArr) {
    const countriesList = countriesArray.filter(country => country.continent.code === code)
    const continent = {
      code: code,
      name: continentName,
      countries: countriesList
    }

    continentsList.push(continent)
  }
  return continentsList
}

const schema = gql`
  type Query {
    continents: [Continent]!
    continent(code: String!): Continent,
    countries: [Country]!,
    country(code: String!): Country,
  }
  type Continent {
    name: String!,
    code: String!
    countries: [Country]!,
  }

  type Country {
    code: String!,
    name: String!,
    native: String!,
    phone: String!,
    continent: Continent!,
    capital: String!,
    currency: String!,
    languages: [String]!,
    emoji: String!,
    emojiU: String!
  }
`

const resolvers = {
  Query: {
    continents: () => {
      const continents = getContinents()
      return continents
    },
    continent: (parent, { code }) => {
      const continents = getContinents()
      return continents.find(continent => continent.code === code)
    },
    countries: () => {
      const countries = getCountries()
      return countries
    },
    country: (parent, { code }) => {
      const countries = getCountries()
      return countries.find(country => country.code === code)
    }
  },

  Country: {
    continent: country => {
      const continents = getContinents()
      return continents.find(continent => continent.code === country.continent.code)
    }
  },

  Continent: {
    countries: continent => {
      const countries = getCountries()
      return countries.filter(country => country.continent.code === continent.code)
    }
  } 
}

const server = new ApolloServer({
  typeDefs: schema,
  resolvers
})

server.applyMiddleware({ app, path: '/graphql' })

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql')
})