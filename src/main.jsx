import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';


import Welcome from './welcome';
import Quiz2 from './quiz2';
import Failure from './failure';
import Success from './success';
import SecretSuccess from './secretSuccess';


require ('./styles/reset.scss');
require ('./styles/main.scss');

  class App extends React.Component {

    constructor(props) {
      super(props);
      this.state={
      }
    }

    render() {
      return (
        <div className="full">
          <section className="Sidebar"></section>
          <div className="Quiz-Area Ghostbusters">
            <Router history= {browserHistory}>
            <Redirect from='/' to='/welcome' />
            <Route path='/welcome' component={Welcome} />
            <Route path='/quiz2' component={Quiz2} />
            <Route path='/failure' component={Failure} />
            <Route path='/success' component={Success} />
            <Route path='/secretSuccess' component={SecretSuccess} />
            </Router>
          </div>
        </div>
      )}
    }





ReactDOM.render(<App/>,document.getElementById('react-app'));
