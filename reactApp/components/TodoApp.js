import React from 'react';
import ReactDOM from 'react-dom';

import InputLine from './InputLine'
import TodoList from './TodoList'

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    }
    this.addTodo = this.addTodo.bind(this)
  }

  componentDidMount() {
    this.setState({
      list: this.props.list,
    })
  }

  addTodo(e,newTask) {
    e.preventDefault();
    const list = this.state.list.slice()
    list.push({
      taskText: newTask,
      completed: false,
    })
    this.setState({
      list,
    })

  }

  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <div>
          <InputLine submit={this.addTodo}/>
        </div>
        <div>
          <TodoList list={this.state.list}/>
        </div>
      </div>
    )
  }
}

export default TodoApp;
