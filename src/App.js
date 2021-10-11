import React, { useState } from 'react';
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
import CharacterPage from './pages/CharacterPage';
import SuccesLogin from './pages/SuccessLogin';

function App() {

  const [mainCharacters, setMainCharacters] = useState(null);

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
        <CharactersList setMainCharacters={setMainCharacters} />
      </Route>
      <Route path="/counter">
        <Counter />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path='/success-login'>
        <SuccesLogin />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/timer">
        <Timer />
      </Route>
      {mainCharacters?.map((item) => {
        return (
          <Route path={`/${item.name}/${item.id}`}>
            <CharacterPage item={item} />
          </Route>
        );
      })}
    </Router>
  );
}

export default App;
