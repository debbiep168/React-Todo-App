import React from "react";

class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: ''
    }
  }

  handleTyping(event) {
    this.setState({typedText: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submit(this.state.typedText);
    this.setState({typedText: ''});
  }
  render() {
    return (
      <form>
        <input type="text"
          onChange={(event) => this.handleTyping(event)}
          value={this.state.typedText}>
        </input>
        <input type="submit"
          onClick={(event) => this.handleSubmit(event)}
          value="Add Todo Task">
        </input>
      </form>
    );
  }
}

export default InputLine
