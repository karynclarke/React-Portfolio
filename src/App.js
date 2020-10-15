import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
<Route path='/' exact component= {Home} />
<Route path='/products' component={About} /><Route path='/products' component={Projects} /><Route path='/products' component={Contact} />

      </Switch>

      </Router>
    </>
  );
}

export default App;
