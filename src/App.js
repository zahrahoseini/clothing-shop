import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.components';
import { Switch, Route, Link } from 'react-router-dom';

const Hats = props => {
  console.log(window.location)
  return (
    <>
    <h1>HATS</h1>
    <button onClick={() => props.history.push('/')} > HomePage </button>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
