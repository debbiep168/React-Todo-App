import React from "react";
import Todo from './Todo.js'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <ul>
          {this.props.todos.map((todo) => <Todo key={todo.taskText} task={todo.taskText} completed={todo.completed}/>)}
        </ul>
      </div>
    );
  }
}

export default TodoList
