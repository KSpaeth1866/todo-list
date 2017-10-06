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
    this.removeTodo = this.removeTodo.bind(this)
    this.toggleDone = this.toggleDone.bind(this)
  }

  componentDidMount() {
    this.setState({
      list: this.props.list,
    })
  }

  addTodo(e, newTask) {
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

  removeTodo(e, index) {
    e.preventDefault();
    const list = [...this.state.list.slice(0, index),...this.state.list.slice(index + 1)]
    this.setState({
      list,
    })
  }

  toggleDone(e, index) {
    e.preventDefault();
    const list = this.state.list.slice();
    list[index].completed = !list[index].completed
    this.setState({
      list,
    })
  }

  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <div>
          <InputLine
            add={this.addTodo}
          />
        </div>
        <div>
          <TodoList
            list={this.state.list}
            remove={this.removeTodo}
            toggleDone={this.toggleDone}
          />
        </div>
      </div>
    )
  }
}

export default TodoApp;
