import React from "react";
import ReactDOM from "react-dom";


var dummyData = ['Clean the dishes', 'Vacuum the room', 'Make the bed', 'Take out the trash', 'Buy groceries'];

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <ul>
          {dummyData.map((todo) => <Todo key={todo} task={todo}/>)}
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
        <li><input type="submit" value="X"></input> {this.props.task}</li>
      </div>
    )
  }
}

class InputLine extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
        <input type="text" value="Task"></input>
        <input type="submit" value="Add Todo Task"></input>
      </form>
    );
  }
}

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
