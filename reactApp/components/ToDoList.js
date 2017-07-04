import React from "react";
import Todo from './Todo.js'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('TODOLIST', this.props.todos);
    return(
      <div>
        <ul>
          {this.props.todos.map((todo, index) =>
            <Todo
            key={todo.id}
            xClick={() => this.props.todoXClick(index)}
            toggleTask={() => this.props.toggleTodo(index)}
            task={todo.task}
            completed={todo.completed}
          />)}
        </ul>
      </div>
    );
  }
}

export default TodoList
