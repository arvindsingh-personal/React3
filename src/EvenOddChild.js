import React, { Component } from 'react'

export default class EvenOddChild extends Component {
     
  color="";
  
  render() {
    return (
        <>
        
        { this.props.number%2 ? this.color = 'red' : this.color = 'blue' }

      <div style={{backgroundColor: `${this.color}`, padding:'15vh'}} >
       
         <h1>This is Child Component { this.props.number}</h1>
      </div>
      </>
    )
  }
}
