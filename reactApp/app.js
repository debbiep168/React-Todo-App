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
        <input type="submit" value="X"></input>
        <li>{this.props.task}</li>
      </div>
    )
  }
}

ReactDOM.render(<TodoList />,
   document.getElementById('root'));
