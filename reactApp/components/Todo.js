import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.completed ?
          <li>
              <input onClick={() => this.props.xClick()} type="submit" value="X">
              </input> {' '}
          <span onClick={() => this.props.toggleTask()}>
            <strike>{this.props.task}</strike>
          </span>
        </li> :
          <li onClick={() => this.props.toggleTask()}>
            <input onClick={() => this.props.xClick()} type="submit" value="X">
            </input> {' '}
            <span onClick={() => this.props.toggleTask()}>
              {this.props.task}
            </span>
          </li>}
      </div>
    )
  }
}

export default Todo
