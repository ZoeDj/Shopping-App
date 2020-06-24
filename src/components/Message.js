import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to our online store, ",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subsribing, ",
    });
  }

  render() {
    const { name } = this.props; //destructuring props
    // const {state1, state2} = this.state
    return (
      <div>
        <h1>
          {this.state.message}
          {name} {/*this.props.name becomes name */}
        </h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
