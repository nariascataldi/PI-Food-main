import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage(){
  console.log("Bienvenidos")
  return (
    <div className='LandingPage'>
      <h1 className="letras">Bienvenidos a mi super página, espere y será atendido</h1>
      <Link to='/home'>
        <button className='button' id='button'>Ingresar</button>
      </Link>
    </div>
  ) 
}