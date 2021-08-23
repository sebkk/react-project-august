import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Navigation from './components/Navigation';
import PhotoBlock from './components/PhotoBlock';
import AboutPage from './components/AboutPage';

function App() {

  return (
    <Router>
      <Navigation />
      <PhotoBlock />
      <AboutPage />
    </Router>
  );
}

export default App;
