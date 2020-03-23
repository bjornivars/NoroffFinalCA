import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import HomePage from './pages/Homepage';
import CardSpecific from './pages/CardSpecific';



ReactDOM.render(
  <Router>
      <App>
          <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/card-specific/:id/' exact component={CardSpecific} />
              {/* <Route path='/contact/' exact component={Contact} />
              <Route path='/about/' exact component={About} />
 */}
          </Switch>
      </App>
  </Router>,

  document.getElementById('root'));


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();