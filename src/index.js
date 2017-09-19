import './assets/styles/main.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Home from './js/components/Home.jsx';
import SubPage from './js/components/SubPage.jsx';
import NotFound from './js/components/NotFound.jsx';
import Popup from './js/components/Popup.jsx';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

let router;

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      runUnmount: false
    }
  }

  render() {
    window.E = new Event('runUnmount', {'bubbles':true, 'cancelable':false});
    return (
      <Router ref={(input) => { this.router = input; }} getUserConfirmation={(message, callback) => {
        this.setState({runUnmount: true});
        window.dispatchEvent(window.E);
        ReactDOM.render((
          <Popup message={message} callback={callback} />
        ), document.getElementById('modal'))
      }}>
        <div>
          <ul className="navigation">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/subpage">SubPage</Link></li>
          </ul>

          <hr/>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/subpage" exact component={SubPage}/>
              <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <Root/>
  ,
  document.getElementById('app')
);
