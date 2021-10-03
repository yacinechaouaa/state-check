import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    name: "",
    bio: "",
    profession: "",
    show: true,
    img: "",
    time: 0,
  };
  change = () => {
    if (this.state.show) {
      this.setState({
        name: "yassine chaoua",
        bio: "27/11/1998",
        profession: "Player",
        img:
          "https://scontent.ftun10-1.fna.fbcdn.net/v/t1.6435-9/99131847_131952868467468_8761234818525560832_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=y442F5EUDMwAX8FFSPU&_nc_ht=scontent.ftun10-1.fna&oh=fea2bc541946998e2b77f3b76d4a83d0&oe=617ACEBA",
      });
    }
  };
  counter = () => {
    this.setState({ time: this.state.time + 1 });
    return this.state.time;
  };
  componentDidMount() {
    var t = setInterval(this.counter, 1000);
    this.setState({ time: t });
  }

  render() {
    const result = () => {
      if (this.state.time < 60) {
        return `${this.state.time} secondes`;
      }
      if (this.state.time > 60) {
        return `${Math.trunc(this.state.time / 60)} min and ${
          this.state.time % 60
        }
         sec `;
      }
      if (this.state.time > 3600) {
        return `${Math.trunc(this.state.time / 3600)} hours and ${Math.trunc(
          (this.state.time % 3600) / 60
        )} and ${(this.state.time % 3600) % 60}`;
      }
    };
    return (
      <div className="main">
        <h1>{this.state.name}</h1>
        <p>{this.state.bio}</p>
        <p>{this.state.profession}</p>
        <img src={this.state.img} id="image" />
        <button onClick={this.change}> show me the profile</button>
        <p>{result()}</p>
      </div>
    );
  }
}

export default App;
