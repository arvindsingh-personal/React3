import React, { Component } from 'react'
import EvenOddChild from './EvenOddChild'
import EvenOdd from './testCo'
export default class EvenOddParent extends Component {
  render() {
    return (
      <div>
        {/* <EvenOddChild number= {8} /> */}
        {/* <EvenOddChild number= {9} /> */}
        <EvenOdd number = {8} />
        <EvenOdd number = {7} />
        <EvenOdd number = {2} />
      </div>
    )
  }
}
