import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Counter App</h2>
        <div>
          <p style={{ margin: "0 10px" }}>Count: {this.state.count}</p>

          <button onClick={this.incrementCount}>Increment</button>
          <button onClick={this.decrementCount}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default App;
