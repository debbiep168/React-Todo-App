import React from "react";

var dummyData = [{taskText: 'Clean the dishes', completed: true}, {taskText: 'Vacuum the room', completed: false}, {taskText: 'Make the bed', completed: true}, {taskText: 'Buy groceries', completed: false}];

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <ul>
          {dummyData.map((todo) => <Todo key={todo.taskText} task={todo.taskText} completed={todo.completed}/>)}
        </ul>
      </div>
    );
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.completed ? <li><input type="submit" value="X"></input><strike> {this.props.task}</strike></li> : <li><input type="submit" value="X"></input> {this.props.task}</li>}
      </div>
    )
  }
}

export default TodoList