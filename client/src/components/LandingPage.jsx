import React from "react";
import { Link } from "react-router-dom";
import '../styles/LandingPage.css';
import Fiambre from "./client/src/assets/video/Fiambre.mp4";
import ReactPlayer from "react-player";

function LandingPage() {
  console.log("Bienvenidos")
  return (
    <div className='LandingPage'>
    <ReactPlayer url={Fiambre} />

      {/* <h1 className="letras">Food - Proyecto Individual</h1>
      <Link to='/home'>
        <button className='button' id='button'>Ingresar</button>
      </Link> */}
    </div>
  )
}
export default LandingPage;