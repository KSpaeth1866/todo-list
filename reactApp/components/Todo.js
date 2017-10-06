import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <li
        style={{"textDecoration": this.props.task.completed ? "line-through" : null }}
        className="btn btn-default">
        <button>X</button>
        {this.props.task.taskText}
      </li>
    )
  }
}

export default Todo
