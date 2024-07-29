import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { color: "red", shape: "Circle", name: "kent", age: "" };
  }

  changeColor = () => {
    this.setState({ color: "blue" });
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <>
        <ComponentOne
          size="10"
          shade={this.state.color}
          big={this.state.shape}
          image={imageTwo}
        />
        <img src={imageOne} width="200" height="200" />
        <div>Color example: {this.state.color} </div>
        <div>Shape example: {this.state.shape} </div>

        <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />

        {/* <textarea value={this.state.age} /> */}

        <input
          type="text"
          value={this.state.age}
          onChange={(e) => this.setState({ age: e.target.value })}
        />

        <button type="button" onClick={this.changeColor}>
          Change color
        </button>

        <button
          type="button"
          onClick={() => this.setState({ shape: "square" })}
        >
          Change shape
        </button>
      </>
    );
  }
}
export default App;
