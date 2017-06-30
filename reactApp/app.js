import React from "react";
import ReactDOM from "react-dom";
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

  render() {
    return (
    <div>
      <InputLine />
      <TodoList todos={this.state.todos}/>
    </div>
    );
  }
}

ReactDOM.render(<TodoApp />,
   document.getElementById('root'));
