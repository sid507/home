import React from 'react';
import Head from './components/Head';
import './App.css';
import Slide from './components/Slide';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Body } from './components/Body';

function App() {
  return (
    <Router>
      <div className="App">
        <Head />

        <Route exact path="/" render={props => (
          <React.Fragment>
            <Slide />
            <Body />
          </React.Fragment>
        )} />
        <Route path="/about" component={About}></Route>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
