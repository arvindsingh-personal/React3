import logo from './logo.svg';
import './style.css'
import Button from './Button';
import  React, {Component}  from 'react';



export default class Theme extends Component {
  state ={
    text:'',
    color:''
  }
  Change = (event) => {
    let text = event.target.innerText;
    this.setState({
      text: text
    })
    
    
 }
  
  render() {
    return (
      <>
      <div className="Theme" id='Theme' >
        <h1>React Themes Demo</h1>
        <div className='btn'>
        {/* <Button color={'Dark'} change={this.Change } />
        <Button color={'Light'} change={this.Change }/>
        <Button color={'Party'} change={ this.Change }/> */}
        <button onClick={this.Change}>Dark</button>
        <button  onClick={this.Change}>Light</button>
        <button  onClick={this.Change}>Party</button>
        <Button color={this.state.text}/>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      </>
    )
  }
  }