import { gql } from 'apollo-server-express'

export default gql`
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