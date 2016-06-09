import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import TimerHidden from './timerhidden'

export default class Failure extends React.Component {


constructor(props) {
  super(props);
  this.state = {
    started: true
  }
}
_startTimer() {
  this.setState({started: true})
}

_stopTimer() {
  this.setState({started: false})
}


  render() {
    if (this.state.started){
    return (
      <div className="container">
        <iframe className="player" width="854" height="480" src="https://www.youtube.com/embed/j2nYqyfDMnQ?autoplay=1&start=73&end=104&controls=0" frameborder="0" allowfullscreen></iframe>
        <TimerHidden className="timerhidden"
        started={this.state.started}
        stopTimer={this._stopTimer.bind(this)}
        secondsRemaining="35"/>
        </div>
    );

} else return(
  <h2 class="failureMessage"> Well, we're always looking for new equipment techs..... did you know we walk around with unlicensed Nuclear accelerators strapped to our backs?</h2>
)
}
}
