import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

const app = express()

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
    country: () => {
      return {
        "name": "test"
      }
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