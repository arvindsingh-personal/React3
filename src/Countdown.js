import React, { Component } from 'react'

export default class Countdown extends Component {
  constructor() {
    super();
    const countdown = new Date();
    this.state = {
      hours: countdown.getHours(),
      minutes: countdown.getMinutes(),
      seconds: countdown.getSeconds()
    };
  }

  CountTime = () => {
    this.timer = setInterval(
      () => this.task(),
      1000
    );
  }

  task = () => {
    var h = this.state.hours;
    var m = this.state.minutes;
    var s = this.state.seconds;

    if (h == 0 && m == 0 && s == 0) {
      clearInterval(this.timer);
    }

    else if (s > 0) {
      s = s - 1;
    }
    else if (s === 0) {
      console.log(this.state.seconds);
      console.log("hehehe");
      s = 59;
      m = m - 1;
      if (m === 0 && h === 0) {
        m = 0;
        h = 0;
      }
      else if (m === 0) {
        m = 59;
        h = h - 1;
        if (h < 0) {
          h = 0;
        }
      }
    }

    this.setState({
      seconds: s,
      minutes: m,
      hours: h
    })

  }

  render() {
    return (
      <>
        <h3 style={{ color: 'white' }}>Q3. Create a countdown clock that starts on a button click with the current time as start and decrements second by second.</h3>

        <div style={{ backgroundColor: 'white', margin: '10px', padding: '20px' }}>

          <h1  style={{fontSize:'7vw'}}>{this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds}</h1>
          <button onClick={this.CountTime} style={{fontSize:'3vw'}}>start countdown</button>
          <p>{this.state.temp1}</p>

        </div>
      </>

    )
  }
}
