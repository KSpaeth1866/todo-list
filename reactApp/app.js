import React from 'react';
import ReactDOM from 'react-dom';

import InputLine from './components/InputLine'
import Todo from './components/Todo'
import TodoApp from './components/TodoApp'
import TodoList from './components/TodoList'

const dummyData = [
  {
    taskText: "Call mom",
    completed: true,
  },
  {
    taskText: "Clean bedroom",
    completed: false,
  },
  {
    taskText: "Apply for jobs",
    completed: false,
  },
  {
    taskText: "Buy a cat",
    completed: false,
  },
  ]

ReactDOM.render(
  <TodoApp list={dummyData}/>,
  document.getElementById('root')
);
