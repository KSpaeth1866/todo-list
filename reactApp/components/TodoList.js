import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './Todo'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.list.map( (task) => (<Todo key={task.taskText} task={task}/>) )}
        </ul>
      </div>
    )
  }
}

export default TodoList;
