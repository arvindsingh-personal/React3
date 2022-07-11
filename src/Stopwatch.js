import React, { Component } from 'react'

export default class Stopwatch extends Component {
    constructor() {
        super();
        this.state = {
            hh:0,
            mm:0,
            ss:0,
            ms:0
        };
    }
   
    Start = () => {
        // alert();
        this.timer = setInterval(
            () => this.task(),
            10
          );
         document.getElementById('start').disabled=true;
         document.getElementById('resume').disabled=true;
         
        
    }
    task = () => {
       
        var hours = this.state.hh;
        var minutes = this.state.mm;
        var seconds  = this.state.ss;
        var miliSeconds = this.state.ms;

        if(miliSeconds < 100) {
            console.log("line 32");
            miliSeconds += 1;
        }
        else if(miliSeconds > 99) {
            // alert();
            miliSeconds = 0;
            seconds += 1;
            if(seconds > 59) {
                seconds = 0;
                minutes += 1;
            }
        }
        if(minutes > 59) {
            minutes = 0;
            hours += 1;
        }
        

        this.setState({
           hh: hours,
           mm: minutes,
           ss: seconds,
           ms: miliSeconds
        })
    }
    Reset = () => {
        this.setState({
           hh:0,
           mm:0,
           ss:0,
           ms:0
        })
        clearInterval(this.timer);
        document.getElementById('resume').disabled=false;
        document.getElementById('start').disabled=false;
    }

    Pause = () => {
        clearInterval(this.timer);
        document.getElementById('resume').disabled=false;
       
    }

    Resume = () => {
            this.Start();
            document.getElementById('resume').disabled=true;
    }

    render() {
        return (
            <div style={{ backgroundColor: 'white', padding: '8vw' }}>
                <div><h1>React Stopwatch</h1></div>
                <h1>{ this.state.hh +":"+ this.state.mm +":"+ this.state.ss +":"+ this.state.ms }</h1>
                <div>
                    <button onClick={this.Start} id='start' >Start</button>
                    <button onClick={this.Pause}>Pause</button>
                    <button onClick={this.Start} id='resume'>Resume</button>
                    <button onClick={this.Reset}>Reset</button>
                </div>
            </div>
        )
    }
}