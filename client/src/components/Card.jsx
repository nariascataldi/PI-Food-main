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
              {/* <a> */}
                <Link to={'/recipe/' + id} className={styles.cardRead}>
                  See recipe details by {creditsText}</Link>
              
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

{/* <div className={styles.cardContainer}>
  <div className={`${styles.card} ${styles.uClearfix}`}>
    <div className={styles.cardBody}>
*      <h2 className={styles.cardTitle}>{title}</h2>
      <ul className={`${styles.cardDescription} ${styles.subtle}`}>
        {diet.map(d => <li key={d.title}>{d.title}</li>)}
      </ul>
      <div >
        <Link to={'/recipe/' + id} className={styles.cardRead}>
          See recipe details by {creditsText}</Link>
      </div>
    </div>
*    <img src={image} alt="not found" width="300px" height="300px" className={styles.cardMedia} />
  </div>
  <div className={styles.cardShadow}></div>
</div> */}


{/* <div className={styles.content_wrapper}>
      <div className={styles.news_card}>
        <a href="#" className={styles.news_card__card_link}></a>
        <img src={image} alt="not found" className={styles.news_card__image} />
        <div className={styles.news_card__text_wrapper}>
          <h2 className={styles.news_card__title}>{title}</h2>
          <div className={styles.news_card__post_date}> <Link to={'/recipe/' + id} className={styles.cardRead}>
            See recipe details by {creditsText}</Link></div>
          <div className={styles.news_card__details_wrapper}>
            <p className={styles.news_card__excerpt}>      <ul className={`${styles.cardDescription} ${styles.subtle}`}>
              {diet.map(d => <li key={d.title}>{d.title}</li>)}
            </ul></p>
            <a href="#" className={styles.news_card__read_more}>Read more <i className={`${styles.fas} ${styles.fa_long_arrow_alt_right}`}></i></a>
          </div>
        </div>
      </div>
    </div> */}

