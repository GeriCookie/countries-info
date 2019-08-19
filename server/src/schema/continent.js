import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    continents: [Continent]!
    continent(code: String!): Continent
  }

  type Continent {
    name: String!
    code: String!
    countries: [Country]!
  }
`
