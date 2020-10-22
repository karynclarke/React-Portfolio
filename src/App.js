import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Cards from './components/Cards';
import Footer from './components/Footer';


function App() {
  return (
  
    <Router>
      <Navbar />
      <Switch>

  <Route path='/' exact component={Home} />
 <Route path='/About' component={About} />
 <Route path='/Projects' component={Cards} />
 <Route path='/Contact' component={Footer} /> 
      </Switch>
      </Router>

  );
}

export default App;
