import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <Router>
    <Navigation />
  </Router>
);

export default App;
