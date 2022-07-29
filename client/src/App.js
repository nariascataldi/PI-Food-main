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
import './App.css';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/recipe' element={<RecipeCreate />} />
          <Route path='/recipe/:id' element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
