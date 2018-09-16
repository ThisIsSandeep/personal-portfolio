import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/pages/Home';
import NotFound from './component/pages/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="main-container">
          <Header />
          <div id="body-container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
