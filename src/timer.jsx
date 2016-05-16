import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class Timer extends React.Component {

constructor(props){
  super(props);
  this.state = {
    secondsRemaining: 0
  }
}

_tick() {
  this.setState({secondsRemaining: this.state.secondsRemaining - 1});
  if (this.state.secondsRemaining === 0 && this.timer) {
    clearInterval(this.timer);
    this.props.stopTimer();
    // this.timer = null;
  }
}
_renderMinutes() {
  let minutes = Math.floor(this.state.secondsRemaining / 60);
  let seconds = this.state.secondsRemaining % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return (<div>{minutes}:{seconds}</div>)
}
componentDidMount(props) {
  if (this.props.started && !this.timer) {
    this.setState({ secondsRemaining: this.props.secondsRemaining });
    this.timer = setInterval(this._tick.bind(this), 1000);
  }
}
componentWillUnmount() {
  clearInterval(this.timer);
}
render(){
  return (
    <div className="timer">
      {this._renderMinutes()}
    </div>
  )
}
}
