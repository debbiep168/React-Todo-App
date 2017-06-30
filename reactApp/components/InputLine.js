import React from "react";

class InputLine extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.submit("Test Task");
  }
  render() {
    return (
      <form>
        <input type="text" value="Task"></input>
        <input type="submit" onClick={(e) => this.handleClick(e)} value="Add Todo Task"></input>
      </form>
    );
  }
}

export default InputLine
