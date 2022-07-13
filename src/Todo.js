import { Component } from 'react'
import './style.css'
import Incomplete from './Incomplete';
import Complete from './Complete';


export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      incomplete: [],
      completed: [],
      newtask: '',
      task_id: '',
      editable_task_id: ''
    }
  }
  
  NewTaks = (event) => {
    this.setState({
      newtask: event.target.value
    })
    console.log(this.state.newtask);
  }

  Add = () => {
    this.setState({
      incomplete: [...this.state.incomplete, this.state.newtask],
      newtask: ''
    })
  }

  DeleteIncomplete = (event) => {
    let id = event.target.id;
    this.state.incomplete.splice(id, 1)
    this.setState({
      incomplete: this.state.incomplete
    })
  }

  EditIncomplete = (event) => {
    document.getElementById('Add').style.display = 'none';
    document.getElementById('Update1').style.display = 'block';
    let id = event.target.id;
    let editable_task = this.state.incomplete[id];
    alert(editable_task);
    this.setState({
      newtask: editable_task,
      editable_task_id: id
    })
  }

  Update1 = (event) => {
    document.getElementById('Add').style.display = 'block';
    document.getElementById('Update1').style.display = 'none';
    alert(this.state.newtask);
    alert(this.state.editable_task_id);
    this.state.incomplete[this.state.editable_task_id] = this.state.newtask;
    this.setState({
      incomplete: this.state.incomplete,
      newtask: '',
      editable_task_id: ''
    })
  }

  Check = (event) => {

    let id = event.target.parentElement.id
    alert(id)
    let completed_tasks = this.state.incomplete[id]
    this.state.incomplete.splice(id, 1)
    this.setState({
      completed: [...this.state.completed, completed_tasks],
      incomplete: this.state.incomplete
    })
  }

  DeleteCompleted = (event) => {
    let id = event.target.id;
    this.state.completed.splice(id, 1);
    this.setState({
      completed: this.state.completed
    })
  }

  EditCompleted = (event) => {
    document.getElementById('Add').style.display = 'none';
    document.getElementById('Update2').style.display = 'block';
    let id = event.target.id;
    let editable_task = this.state.completed[id];
    alert(editable_task);
    this.setState({
      newtask: editable_task,
      editable_task_id: id
    })
  }

  Update2 = (event) => {
    document.getElementById('Add').style.display = 'block';
    document.getElementById('Update2').style.display = 'none';
    alert(this.state.newtask);
    alert(this.state.editable_task_id);
    this.state.completed[this.state.editable_task_id] = this.state.newtask;
    this.setState({
      completed: this.state.completed,
      newtask: '',
      editable_task_id: ''
    })
  }

  render() {
    return (

      <div className="container">
        <h2>TODO LIST</h2>
        <h3>Add Item</h3>
        <p>
          <input id="new-task" onChange={this.NewTaks} type="text" value={this.state.newtask} />
          <button onClick={this.Add} id='Add'>Add</button>
          <button onClick={this.Update1} id='Update1' hidden>Update</button>
          <button onClick={this.Update2} id='Update2' hidden>Update</button>
        </p>

        <h3>Todo</h3>
        <ul id="incomplete-tasks">
          {this.state.incomplete.map((task, index) => (

            <Incomplete task={task} index={index} Edit={this.EditIncomplete} Delete={this.DeleteIncomplete}
              Check={this.Check} />

          )
          )
          }
        </ul>

        <h3>Completed</h3>
        <ul id="completed-tasks">
          {this.state.completed.map((task, index) => (

            <Complete task={task} index={index} Edit={this.EditCompleted} Delete={this.DeleteCompleted} Checked={this.Checked} />

          ))}
        </ul>

      </div>

    )
  }
}