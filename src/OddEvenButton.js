import React, { Component } from 'react'

export default class OddEvenButton extends Component {
  constructor() {
    super();
    this.state = ({
      count:0,
    });
  }
  increment = (event) => {
    
    this.setState({
      count: event.target.value++,
   
    });

  }

  render() {
    return (
      <div style={{backgroundColor:'black', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100vh'}} >
       
        {/* <input type="button" value={`Click ${this.state.count} times`} onClick={ this.increment }/> */}

         <button  onClick={ this.increment } style={{border:'1px solid cyan', fontSize:'60px'}} >Click { this.state.count} times</button>
         <p style={{fontSize:'50px',backgroundColor:'white', border:'1px solid cyan'}} >
           {(this.state.count%2)?'Odd':'Even'}
         </p>
      </div>
    )
  }
}
