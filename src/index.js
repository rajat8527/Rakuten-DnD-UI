import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import CharacterListView from './CharacterListView';

ReactDOM.render(
  <React.StrictMode>
    <Router history={useHistory}>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/CharacterListView">
          <CharacterListView />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
