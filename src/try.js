import React, { Component } from 'react'

export default class Try extends Component {
  constructor() {
    super();
    this.state = {
      box: 'Cedcoss',
      show:''
    }
  }
  handler = event => {
    this.setState({
      box: event.target.value
    });
    
  }
  
  print = () => {
    this.setState ({
    show:this.state.box,
    });
  } 

  render() {
    return (
      <div>
        <input type='text' value={this.state.box} onChange={ this.handler } />
        <input type='button' value='click me' onClick ={ this.print }/>
        <p>{ this.state.show }</p>
      </div>
    )
  }
}
