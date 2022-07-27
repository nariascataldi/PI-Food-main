import React from "react";
import '../styles/Paginate.css'

export default function Paginate({ recipesPerPage, allRecipes, paginate }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumber.push(i)
  }
  return (
  <nav>
    <ul className="paginado">
      {pageNumber?.map(number =>(
        <li className="number" key={number}>
        <button className='button' id='button' onClick={() => paginate(number)}>{number}</button>        </li>
      ))}
    </ul>
  </nav>
 )
}