import React from "react";
import { Link } from "react-router-dom";
import styles from './Card.module.css'


export default function Card({ image, title, diet, id, creditsText }) {
  return (
    <React.Fragment>
      <div className={styles.team}>
        <div className={styles.card}>
          <div className={`${styles.side} ${styles.side1}`}>
            <div className={styles.img_info}>
              <img className={styles.img_recipes} src={image} alt="Recipes delicius" />
              <h3 className={styles.img_title}>{title}</h3>
            </div>
          </div>
          <div className={`${styles.side} ${styles.side2}`}>
            <div className={styles.img_info}>
              <h2 className={styles.img_h2}>Diets</h2>
              <ul className={styles.cardDescription}>
                {diet.map(d => <li key={d.title}>{d.title}</li>)}
              </ul>
              <Link to={'/recipe/' + id} className={styles.cardRead}>
                See recipe details by {creditsText}</Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

