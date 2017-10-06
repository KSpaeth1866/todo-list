import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newTask: ""
    }
  }

  handleNewTaskChange(e) {
    this.setState({
      newTask: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="New Task"
            value={this.state.newTask}
            onChange={ (e) => (this.handleNewTaskChange(e)) }
          />
          <button
            // type="submit"
            onClick={ (e) => this.props.add(e, this.state.newTask) }
            className="btn btn-default"
          >
            Create New Task
          </button>
        </form>
      </div>
    )
  }
}

export default InputLine;
