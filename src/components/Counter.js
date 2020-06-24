import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState(
    //   { count: this.state.count + 1 },
    //   () => {
    //     console.log("Callback value", this.state.count);//callback function is a second agrgument
    //   }
    // );
    // console.log(this.state.count); //this executes before state updates

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <div>Count- {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
