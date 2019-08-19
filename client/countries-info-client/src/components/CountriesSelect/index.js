import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Select from 'react-select'

const GET_COUNTRY_LIST = gql`
  query {
    countries {
      code
      name
      continent {
        code
        name
      }
      emoji
    }
  }
`

const getCountriesPerContinent = (selectedContinent, countries) => {
  return countries.filter(country => country.continent.code === selectedContinent.code)
}

const CountriesSelect = ({
  selectedContinent,
  selectedCountry,
  onCountrySelected
}) => (
  <Query query={GET_COUNTRY_LIST}>
    {({ data, loading }) => {
      const { countries } = data
      
      if (loading && !countries) {
        return <div>Loading...</div>
      }

      return (
        <Select
          value={selectedCountry}
          onChange={onCountrySelected}
          options={selectedContinent ? getCountriesPerContinent(selectedContinent, countries) : countries }
          getOptionLabel={option => `${option.emoji} ${option.name}`}
          getOptionValue={option => option.code}
          placeholder="Select country"
          theme={theme => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: '#dfdfdf',
              primary: '#c1c1c1'
            }
          })}
        />
      )
    }}
  </Query>
)

export default CountriesSelect