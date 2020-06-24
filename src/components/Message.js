import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to our online store, ",
    };

    this.changeMessage = this.changeMessage.bind(this);
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subsribing, ",
    });
    // "this" is undefined and biding is necessary
    // console.log(this);
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
        {/* <button onClick={() => this.changeMessage()}>Subscribe</button> */}
        {/* <button onClick={this.changeMessage.bind(this)}>Subscribe</button> */}
        {/* method #3 is to bind in constructor */}
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
