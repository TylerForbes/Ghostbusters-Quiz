import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';

export default class Failure extends React.Component {


constructor(props) {
  super(props);
  this.state = {
  }
}

  render() {
    return (
      <div className="container">
        <iframe className="player" width="854" height="480" src="https://www.youtube.com/embed/lZVPCtmkDSY?autoplay=1&controls=0" frameborder="0" allowfullscreen></iframe>
      </div>
    );
  }

}
