import React, { Component, Fragment } from 'react';
import ContinentsSelect from '../ContinentsSelect'
import CountriesSelect from '../CountriesSelect'
import Country from '../Country'

import './index.css'

class App extends Component {
  state = {
    selectedContinent: null,
    selectedCountry: null
  }

  onContinentSelected = continent => {
    this.setState({ selectedContinent: continent })
    this.setState({ selectedCountry: null })
  }

  onCountrySelected = country => {
    this.setState({ selectedCountry: country })
    this.setState({ selectedContinent: country.continent })
  }
  render() {
    const { selectedContinent, selectedCountry } = this.state
    return (
      <Fragment>
        <div className="selectArea">
          <ContinentsSelect
            selectedContinent={selectedContinent}
            onContinentSelected={this.onContinentSelected}
          />
          <CountriesSelect
            selectedContinent={selectedContinent}
            selectedCountry={selectedCountry}
            onCountrySelected={this.onCountrySelected}
          />
        </div>
        <div className="countryContainer">
          <Country
            selectedCountry={selectedCountry}
          />
        </div>
      </Fragment>
    )
  }
}

export default App