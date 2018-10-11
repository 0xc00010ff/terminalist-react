import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './list';
import Detail from './detail';
import './index.css';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Route exact path = '/' component = {Landing} />
            <Route exact path = "/command" component = {Detail} />
          </div>
      </Router>
    );
  }
}

export default App;
