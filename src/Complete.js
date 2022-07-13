import React, { Component } from 'react'

export default class Complete extends Component {
  render() {
    return (
        <li>
          <input type="checkbox" checked />
          <label>{ this.props.task }</label>
          <button className="edit" id={this.props.index} onClick={this.props.Edit}>Edit</button>
          <button className="delete" id={this.props.index} onClick={this.props.Delete}>Delete</button>
        </li>
    )
  }
}
