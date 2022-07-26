import React from "react";
import { Link } from "react-router-dom";
import '../styles/LandingPage.css';
import Tabla from '../assets/image/wooden-cutting.png'


function LandingPage() {
  console.log("Bienvenidos")
  return (
    <div className='LandingPage'>
      <div className="Tabla"> 
        <div className="home">
          <Link to='/home'>
            <button className='button' id='button'>Recetas</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default LandingPage;