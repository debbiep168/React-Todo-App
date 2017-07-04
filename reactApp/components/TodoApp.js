import React from "react";
import TodoList from './ToDoList.js';
import InputLine from './InputLine.js';
import axios from 'axios'; //communicating with the routes we wrote in the server that will communicate with the database

const dbUrl = "http://localhost:3000/db";
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() { //client gets live data
    axios.get(dbUrl + '/all')
    .then(function(response) {
      this.setState({todos: response.data})
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  addTodo(task) {
    axios.post(dbUrl + '/add', {
      task: task
    })
    .then(function (response) {
      var newarr = this.state.todos.slice();
      newarr.push(response.data);
      this.setState({todos: newarr});
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    })
  }

  removeTodo(id) {
    axios.remove(dbUrl + '/remove', {
      id: id
    })
    .then(function(response) {
      var index = 0;
      for (var i = 0; i < this.state.todos; i++) {
        if (this.state.todos[i] === response.data) {
          index = i;
          break;
        }
      }
      var newarr = this.state.todos.slice();
      newarr.splice(index, 1);
      this.setState({todos: newarr});
    }.bind(this))
    .catch(function(error) {
      console.log(error);
    })
  }

  toggleTodo(id) {
      axios.get(dbUrl + '/toggle', {
        id: id
      })
      .then(function(response) {
        var newarr = this.state.todos.slice();
        response.data.completed = true;
        newarr.push(response.data);
        this.setState({todos: newarr});
      }.bind(this))
      .catch(function(error) {
        console.log(error);
      })
  }

  render() {
    //console.log('TODOS', this.state.todos);
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
