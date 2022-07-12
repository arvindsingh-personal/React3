import React, { Component } from 'react'
import EvenOddChild from './EvenOddChild'
import EvenOdd from './Child.j'
export default class EvenOddParent extends Component {
  render() {
    return (
      <div>
        
        <EvenOddChild number = {8} />
        <EvenOddChild number = {7} />
        <EvenOddChild number = {2} />
      </div>
    )
  }
}
