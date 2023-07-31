import React, { Component } from "react";

import './App.css';


//Class-based component...
class App extends Component {
  state = {
    person: {
      fullName: "Mustafa Usman",
      
      //Dummy text bio introduction.
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgSrc: "./images/mustafa.jpg",
      profession: "Engineer and an aspiring Web Developer",
    },
    show: false,
    intervalId: null,
    timeElapsed: 0,
  };

  //Interval...
  componentDidMount() {
    const intervalId = setInterval(this.updateTimeElapsed, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  //Time Elapsed...
  updateTimeElapsed = () => {
    this.setState((prevState) => ({
      timeElapsed: prevState.timeElapsed + 1,
    }));
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeElapsed } = this.state;

    return (
      <div style={{ background: "linear-gradient(to right, gray, skyblue)" }}>
        <button style={{ color: "red" }} onClick={this.toggleShow}>
          Toggle Profile
        </button>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <img
              style={{ height: 250, width: 250, padding: 20 }}
              src={imgSrc}
              alt="Avatar"
            />
            <p style={{ color: "white" }}> Bio: {bio}</p>
            <p style={{ color: "purple" }}>Profession: {profession}</p>
          </div>
        )}
        <p>Time Elapsed: {timeElapsed} seconds</p>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

