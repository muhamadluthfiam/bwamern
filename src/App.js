import React from 'react';
import 'assets/scss/style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LandingPage from 'pages/LandingPage';
import PropertiesPage from 'pages/PropertiesPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={ LandingPage }></Route>
        <Route path="properties" componenent={ PropertiesPage }></Route>
      </Router>
    </div>
  );
}

export default App;
