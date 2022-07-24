import './App.css';

import { 
  BrowserRouter,
  Routes,
  Route } from "react-router-dom";

import React from 'react';

import LandingPage from './components/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
