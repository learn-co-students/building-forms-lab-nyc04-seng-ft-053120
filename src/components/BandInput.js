// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    }
  }

  handleOnChange = e => {
    this.setState({
      name: e.target.value,
    })
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addBand(this.state);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="band-name">Band Name</label>
          <input type="text" name="band-name" value={this.state.name} onChange={this.handleOnChange}></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default BandInput
