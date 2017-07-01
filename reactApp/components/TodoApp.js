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

  componentDidMount() {
    this.setState({todos: dummyData})
  }

  addTodo(task) {
    var newarr = this.state.todos.slice();
    newarr.push({taskText: task, completed: false});
    this.setState({todos: newarr});
  }

  removeTodo(index) {
    var arr = this.state.todos.slice();
    arr.splice(index, 1);
    console.log(arr);
    this.setState({todos: arr});
  }

  toggleTodo(index) {
    var newarr = this.state.todos.slice();
    newarr[index].completed = true;
    this.setState({todos: newarr});
  }

  render() {
    console.log(this.state);
    return (
    <div>
      <InputLine submit={(task) => {this.addTodo(task)}}/>
      <TodoList
        todos={this.state.todos}
        toggleTodo={(index) => this.toggleTodo(index)}
        todoXClick={(index) => this.removeTodo(index)}
      />
    </div>
      );
  }
}

export default TodoApp
