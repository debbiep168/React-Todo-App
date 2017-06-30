import React from "react";
import ReactDOM from "react-dom";
import TodoList from './ToDoList.js'
import InputLine from './InputLine.js'

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <InputLine />
      <TodoList />
    </div>
    );
  }
}

ReactDOM.render(<TodoApp />,
   document.getElementById('root'));
