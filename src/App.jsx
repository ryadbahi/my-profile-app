import React from "react";
import "./App.css";
import starkImg from "./assets/stark.jpg";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "Tony Stark",
        bio: "Genius, billionaire, playboy, philanthropist.",
        imgSrc: starkImg,
        profession: "Engineer / Superhero",
      },
      shows: false,
      timeInterval: 0,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((s) => ({ timeInterval: s.timeInterval + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow() {
    this.setState((s) => ({ shows: !s.shows }));
  }

  render() {
    const { person, shows, timeInterval } = this.state;

    return (
      <div className="App">
        <h1>My Profile App</h1>
        <button className="toggle-btn" onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        <div className={`profile-container ${shows ? "show" : ""}`}>
          <div className="profile-card">
            <h2>{person.fullName}</h2>
            <img src={person.imgSrc} alt="Profile" />
            <p>{person.bio}</p>
            <h4>{person.profession}</h4>
          </div>
        </div>

        <p className="timer">Time since mounted: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
