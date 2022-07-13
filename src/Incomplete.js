import React, { Component } from 'react'

export default class Incomplete extends Component {
  render() {
    return (
      <>

        <li id={this.props.index}>
          <input type='checkbox' onClick={ this.props.Check } checked={false} />
          <label>{this.props.task}</label>
          <button className='edit' id={this.props.index} onClick={this.props.Edit}>Edit</button>
          <button className='delete' id={this.props.index} onClick={this.props.Delete} >Delete</button>
          <p>{this.props.index}</p>
        </li>
      </>
    )
  }
}
