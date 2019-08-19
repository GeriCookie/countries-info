import cors from 'cors'
import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

import schema from './schema'
import resolvers from './resolvers'
import models, { sequelize } from './models'
import { getContinents, getCountries } from './utils'

const app = express()

app.use(cors())

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    models,
  }
})

server.applyMiddleware({ app, path: '/graphql' })

const eraseDatabaseOnSync = true

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    addContinentsAndCountries()
  }

  app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql')
  })
})

const addContinentsAndCountries = async () => {
  const continentsList = getContinents()
  const countriesList = getCountries()
  for (const continent of continentsList) {
    const countriesPerContinent = countriesList.filter(country => country.continent.code === continent.code)
    await models.Continent.create(
      {
        code: continent.code,
        name: continent.name,
        countries: countriesPerContinent
      },
      {
        include: [models.Country]
      }
    )
  }
}