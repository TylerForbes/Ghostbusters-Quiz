import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Timer from './timer';
import Questions from './questions';

export default class Quiz2 extends React.Component {


constructor(props) {
  super(props);
  this.state = {
    started: false
  }
}

_startTimer() {
  this.setState({started: true})
}

_stopTimer() {
  this.setState({started: false})
}

_showQuiz() {
  return(
    <div>
      <Questions className="question-area"/>
      <Timer className="timer"
      started={this.state.started}
      stopTimer={this._stopTimer.bind(this)}
      secondsRemaining="60"/>
    </div>
  )
}

render(){
  return(
    <div className="quiz">
      { this.state.started ?  this._showQuiz() : <button onClick={this._startTimer.bind(this)}>
        Start Test
      </button>}

  </div>
  )
}
}
