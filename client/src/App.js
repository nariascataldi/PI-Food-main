import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import LandingPage from './components/LandingPage';
import Home from './components/Home';
import RecipeCreate from './components/RecipeCreate';
import Detail from './components/Datail';
import Footer from './components/Footer';
import About from './components/About';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route exact path='/recipe' element={<RecipeCreate />} />
          <Route path='/recipe/:id' element={<Detail />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
