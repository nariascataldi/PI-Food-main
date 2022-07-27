import React from "react";

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
          <a onClick={()=> paginate(number)}>{number}</a>
        </li>
      ))}
    </ul>
  </nav>
 )
}