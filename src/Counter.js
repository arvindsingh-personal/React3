import React, { Component } from 'react'
import './style.css'
export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  decrease = (event) => {
    this.setState({
      count:this.state.count-1,
    })
  }

  reset = (event) => {
    this.setState({
      count: 0,
    })
  }

  increase = (event) => {
    this.setState({
      count: this.state.count+1,
    })
  }

  render() {
    return (
<>
<h1 style={{color:'white'}}>Q2. Create a counter with increment, decrement and reset functionality.</h1>
      <div id='parent' >

        <h1>Counter</h1>

        <div>
          <h1 style={{ fontSize: '8vw' }}>{this.state.count}</h1>

          <button onClick={this.decrease}>DECREASE</button>
          <button onClick={this.reset}>RESET</button>
          <button onClick={this.increase}>INCREASE</button>
        </div>

      </div>
      </>
    )
  }
}
