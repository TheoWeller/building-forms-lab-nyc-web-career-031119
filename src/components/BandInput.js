// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {
  state = {name: ""}

  handleInput = (event) => {
    this.setState({ name: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.dispatch({type: "ADD_BAND", name: this.state.name})
  }

  render() {
    console.log(this.props);
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} placeholder="Enter name" onChange={this.handleInput}></input>
          <input type="submit"></input>
        </form>
      </div>
      )
    }
  }


export default connect()(BandInput)
