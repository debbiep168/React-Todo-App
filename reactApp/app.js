import React from "react";
import ReactDOM from "react-dom";
import TodoApp from './components/TodoApp.js'

var dummyData = [{taskText: 'Clean the dishes', completed: true}, {taskText: 'Vacuum the room', completed: false}, {taskText: 'Make the bed', completed: true}, {taskText: 'Buy groceries', completed: false}];

ReactDOM.render(<TodoApp />,
   document.getElementById('root'));
