import React from 'react';

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

export default Todo
