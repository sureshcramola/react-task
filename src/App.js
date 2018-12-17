import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import Banner from './components/Banner';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="main-wrapper">
            <Banner />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
