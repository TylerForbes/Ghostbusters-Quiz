import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Failure from './failure';
import Success from './success';
import SecretSuccess from './secretSuccess';
import {browserHistory} from 'react-router';


const question = [
    { question: "Alice, I'm going to ask you a couple of standard questions, okay? Have you or any of your family been diagnosed schizophrenic? Mentally incompetent?",
        answer: "1"},

    { question: "I'd call that a big yes. Uh, are you habitually using drugs? Stimulants? Alcohol?", answer: "2"},

    {  question: "No, no. Just asking. Are you, Alice, menstruating right now?", answer: "3"},
  ]
  var correct = 0

export default class Questions extends React.Component {


constructor(props) {
  super(props);
  this.state = { question: 0 }
  }




_submitAnswer(e){
  e.preventDefault();
    this.refs.quizInput.value === question[this.state.question].answer ? correct += 1 : correct;
    this.setState({ question: this.state.question + 1});
    console.log(correct);
    console.log(question[this.state.question].answer)
    console.log(this.refs.quizInput.value);
    this.refs.quizInput.value = '';
}

_submitted(e) {
  e.preventDefault();
}
_displaying(){
      if (
        question[this.state.question] === undefined
        &&
        correct === 0) {console.log(correct);console.log('failure');
          browserHistory.push('/failure');
      }  else if (
          question[this.state.question] === undefined
          &&
          correct <= 1) {console.log(correct);console.log('success');
            browserHistory.push('/success');
      }  else if (
          question[this.state.question] === undefined
          &&
          correct === question.length) {console.log(correct);console.log('secretsuccess');
            browserHistory.push('/secretsuccess')
          } else {}
}

    render(){
        return (
            <div>
              {this._displaying()}
              <div className="question-area">
                <p className="question">{question[this.state.question].question}</p>
                <div className="answers">
                <form className="user-answers" name="quizInput" onSubmit={this._submitted.bind(this)}>
                  <input type='text' ref="quizInput"/>
                <button onClick={this._submitAnswer.bind(this)}>submit answer</button></form>
                </div>
              </div>
            </div>
        )
    }
}
