import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/Navigation';
import PhotoBlock from './components/PhotoBlock';
import AboutPage from './components/AboutPage';
import AboutMe from './pages/AboutMe'
import CharactersList from './pages/CharactersList'
import Counter from './pages/Counter'
import Login from './pages/Login'
import Register from './pages/Register'
import Timer from './pages/Timer'

function App() {

  return (
    <Router>
      <Navigation />
      <Route path="/" exact>
        <PhotoBlock />
        <AboutPage />
      </Route>
      <Route path="/about-me">
        <AboutMe />
      </Route>
      <Route path="/characters-list">
        <CharactersList />
      </Route>
      <Route path="/counter">
        <Counter />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/timer">
        <Timer />
      </Route>
    </Router>
  );
}

export default App;
