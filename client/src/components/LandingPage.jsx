import React from "react";
import { Link } from "react-router-dom";
import styles from './LandingPage.module.css';


function LandingPage() {
  console.log("Bienvenidos")
//   function saludos(){
//     console.log('Aguarde que lo redirecciono. Gracias');
//     console.log('Mis disculpas, estoy en el stack del Event Loop, :)')
//     redirectStack();
// }
// function redirectStack() { 
//   setTimeout(function(){ window.location.href = "http://localhost:3000/home"; }, 10000); }
//   setTimeout(saludos, 3000);
  
  return (
    <div className={styles.LandingPage}>
      <div className={styles.Tabla}>
        <div className={styles.home}>
          <Link to='/home'>
            <button className={styles.button} id='button'>Recetas</button>
          </Link>

        </div>
      </div>
    </div>
  )
}
export default LandingPage;