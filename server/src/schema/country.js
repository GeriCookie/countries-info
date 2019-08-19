import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    countries: [Country]!
    country(code: String!): Country
  }

  type Country {
    code: String!
    name: String!
    native: String!
    phone: String!
    continent: Continent!
    capital: String!
    currency: String!
    languages: [String]!
    emoji: String!
    emojiU: String!
  }
`