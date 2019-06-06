import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  renderBandNames = (bands) => {
    return bands.map(band => {
      console.log("BAND", band);
      return <li>{band}</li>
    })

  }
  render() {
    console.log("PROPPPZZZ", this.props);
    return(
      <div>
        <BandInput /><br/>
        {this.renderBandNames(this.props.bands)}
      </div>


    )
  }
}

const mapStateToProps = (state) => {
  return {bands: state.bands}
}

export default connect(mapStateToProps)(BandsContainer)
