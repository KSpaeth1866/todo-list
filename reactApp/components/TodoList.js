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
          {this.props.list.map( (task, index) => (<Todo
            key={index}
            task={task}
            index={index}
            remove={this.props.remove}
            toggleDone={this.props.toggleDone}
          />) )}
        </ul>
      </div>
    )
  }
}

export default TodoList;
