import { gql } from 'apollo-server-express'

import continentSchema from './continent'
import countrySchema from './country'

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`

export default [linkSchema, continentSchema, countrySchema]