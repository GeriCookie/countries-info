import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_COUNTRY = gql`
  query($code: String!) {
    country(code: $code) {
      code
      name
      native
      phone
      continent {
        name
        code
      }
      capital
      currency
      languages
      emoji
      emojiU
    }
  }
`

const Country = ({ selectedCountry }) => {
  const { code } = selectedCountry ? selectedCountry : ''
  
  return (
    <div>
      {selectedCountry && 
        <Query
          query={GET_COUNTRY}
          variables={{ code }}
          skip={ code === '' }
        >
          {({ data, loading }) => {
            const { country } = data;

            if (loading && !country) {
              return <div>Loading...</div>
            }

            return (
              <div>
                <div>{country.name}</div>
                <div>{country.native}</div>
                <div>{country.phone}</div>
                <div>{country.continent.name}</div>
                <div>{country.capital}</div>
                <div>{country.currency}</div>
                <div>{country.emoji}</div>
                <div>{country.languages.map(language => <div>{language}</div>)}</div>
              </div>
            )
          }}
        </Query>
      }
    </div>
  )
}

export default Country