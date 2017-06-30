import React from "react";

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

export default InputLine
