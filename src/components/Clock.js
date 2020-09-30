import React, { Component } from 'react'

export default class Clock extends Component {
    constructor() {
      super();
      this.state = {
        currentTime: '',
        alarmTime: ''
     };
     this.Set_Alarm_Time = this.Set_Alarm_Time.bind(this);
  }
  
  componentDidMount(){
      this.clock = setInterval(
        () => this.Set_Current_Time(),
        10
      )
      this.interval = setInterval(
        () => this.checkAlarmClock(),
      10)
  }
  
  componentWillUnmount(){
     clearInterval(this.clock);
      clearInterval(this.interval);
  }
  
  Set_Current_Time(){
      this.setState({
      currentTime: new Date().toLocaleTimeString('it-IT', { hour12: false })
      });
  }
  
  Set_Alarm_Time(event) {
      event.preventDefault();
      const inputAlarmTimeModified = event.target.value + ':00'
      this.setState({
        alarmTime: inputAlarmTimeModified
      })
  }
  
  checkAlarmClock(){
     
        this.alarmMessage = "Your alarm is set for " + this.state.alarmTime + ":";
        if(this.state.currentTime === this.state.alarmTime) {
            alert('WAZAAAPPPPPPPP');
     }   
  }
  
  render() {
      return (
        <div>
          <h1>Alarm Clock</h1>
          <h2>The time is: {this.state.currentTime}.
          </h2>
          <h2>{this.alarmMessage}
          </h2>
          <form>
            <input type="time" onChange={this.Set_Alarm_Time}></input>
          </form>
        </div>
      );
    }
  }
