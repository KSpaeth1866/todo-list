const React = require('react');
const ReactDOM = require('react-dom');

const dummyData = ["Call mom", "Clean bedroom", "Apply for jobs", "Buy a cat"]

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <div>
          <InputLine />
        </div>
        <div>
          <TodoList list={this.props.list}/>
        </div>
      </div>
    )
  }
}

class InputLine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <h1>InputLine placeholder</h1>
    )
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>TodoList Title Placeholder</h1>
        <ul>
          {this.props.list.map( (task) => (<Todo key={task} task={task}/>) )}
        </ul>
      </div>
    )
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <li>
        <button>X</button>        
        {this.props.task}
      </li>
    )
  }
}

ReactDOM.render(
  <TodoApp list={dummyData}/>,
  document.getElementById('root')
);
