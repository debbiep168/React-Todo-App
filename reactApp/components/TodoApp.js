import React from "react";
import TodoList from './ToDoList.js'
import InputLine from './InputLine.js'

var dummyData = [{taskText: 'Clean the dishes', completed: true}, {taskText: 'Vacuum the room', completed: false}, {taskText: 'Make the bed', completed: true}, {taskText: 'Buy groceries', completed: false}];

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  addTodo(task) {
    var newarr = this.state.todos.slice();
    newarr.push({taskText: task, completed: false});
    this.setState({todos: newarr});
  }

  componentDidMount() {
    this.setState({todos: dummyData})
  }

  render() {
    return (
    <div>
      <InputLine submit={(task) => {this.addTodo(task)}}/>
      <TodoList todos={this.state.todos}/>
    </div>
    );
  }
}

export default TodoApp
