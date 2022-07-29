import React from "react";
import styles from './Paginate.module.css';

export default function Paginate({ recipesPerPage, allRecipes, paginate }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumber.push(i)
  }
  return (
  <nav>
    <ul className={styles.paginado}>
      {pageNumber?.map(number =>(
        <li className={styles.number} key={number}>
        <button className={styles.button} id='button' onClick={() => paginate(number)}>{number}</button>        </li>
      ))}
    </ul>
  </nav>
 )
}