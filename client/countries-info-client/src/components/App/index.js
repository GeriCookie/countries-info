import React, { Component } from 'react';
import ContinentsSelect from '../ContinentsSelect'

class App extends Component {
  state = {
    selectedContinent: null,
  }

  onContinentSelected = continent => {
    this.setState({ selectedContinent: continent })
  }

  render() {
    const { selectedContinent } = this.state
    return (
      <ContinentsSelect 
        selectedContinent={selectedContinent}
        onContinentSelected={this.onContinentSelected}
      />
    )
  }
}

export default App