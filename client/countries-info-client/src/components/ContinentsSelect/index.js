import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Select from 'react-select'

import './index.css'

const GET_CONTINENTS_LIST = gql`
  query {
    continents {
      name
      code
    }
  }
`

const ContinentsSelect = ({
  selectedContinent,
  onContinentSelected
}) => (
  <Query query={GET_CONTINENTS_LIST}>
    {({ data, loading }) => {
      const { continents } = data
      
      if (loading && !continents) {
        return <div>Loading...</div>
      }

      return (
        <Select
          className="continentsSelect" 
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

export default ContinentsSelect