import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import './index.css'

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
              <div className="countryCard">
                <div className="row"><span>Name: </span><span className="countryInfo">{country.name}</span></div>
                <div className="row"><span>Name native:</span><span className="countryInfo">{country.native}</span></div>
                <div className="row"><span>Phone code:</span><span className="countryInfo">{country.phone}</span></div>
                <div className="row"><span>Continent:</span><span className="countryInfo">{country.continent.name}</span></div>
                <div className="row"><span>Capital:</span><span className="countryInfo">{country.capital}</span></div>
                <div className="row"><span>Currency:</span><span className="countryInfo">{country.currency}</span></div>
                <div className="row"><span>Flag:</span><span className="countryInfo">{country.emoji}</span></div>
                <div className="row"><span>Languages:</span><div className="countryInfo">{country.languages.map(language => <div>{language}</div>)}</div></div>
              </div>
            )
          }}
        </Query>
      }
    </div>
  )
}

export default Country