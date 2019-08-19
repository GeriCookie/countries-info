import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Select from 'react-select'

const GET_CONTINENTS_LIST = gql`
  query {
    continents {
      name
      code
    }
  }
`

const Continents = ({
  selectedContinent,
  onContinentSelected
}) => (
  <Query query={GET_CONTINENTS_LIST}>
    {({ data, loading }) => {
      const { continents } = data
      console.log(continents)
      
      if (loading && !continents) {
        return <div>Loading...</div>
      }

      return (
        <Select
          value={selectedContinent}
          onChange={onContinentSelected}
          options={continents}
          getOptionLabel= {option => `${option.name}`}
          getOptionValue={option => option.code}
          placeholder="Select continent"
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

export default Continents