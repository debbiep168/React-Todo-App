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
          {this.props.todos.map((todo, index) =>
            <Todo
            key={index}
            xClick={() => this.props.todoXClick(index)}
            toggleTask={() => this.props.toggleTodo(index)}
            task={todo.taskText}
            completed={todo.completed}
          />)}
        </ul>
      </div>
    );
  }
}

export default TodoList
