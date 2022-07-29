import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, filterRecipesByType, orderByName, filterRecipesByTypeFi } from "../actions";
import { Link } from "react-router-dom";
import Cards from "./Card";
import Paginate from "./Paginate";
import SearchBar from "./SearchBar";

import styles from "./Home.module.css";


//hook
export default function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9);
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  };
  const [sort, setSort] = useState('');

  useEffect(() => {
    dispatch(getRecipes())
  }, [dispatch])

  function handleClick(e) {
    e.preventDefault();
    dispatch(getRecipes());
  }
  function handleFilterTypesFi(e) {
    dispatch(filterRecipesByTypeFi(e.target.value))
    setCurrentPage(1)
  }
  function handleFilterTypes(e) {
    dispatch(filterRecipesByType(e.target.value))
    setCurrentPage(1)
  }
  function handleSort(e) {
    e.preventDefault()
    dispatch(orderByName(e.target.value))
    setCurrentPage(1)
    setSort(`Ordenado ${e.target.value}`)
  }



  return (
    <div className={styles.bodyHome}>
      <div className={styles.ingred}>
        <h1>Néstor Arias</h1>
      </div>
      <div>
        <h1>Recetas</h1>

        <Link to='/recipe'>
          <button className={styles.bCrear} id='hC'>Create recipes</button>
        </Link>
        <button onClick={e => { handleClick(e) }}>Reload recipes</button>
        <div>
          <select onChange={e => handleSort(e)} defaultValue='default' key='sort' className={styles.filters}>
            <option value="default" disabled >Alphabetical order</option>
            <option value='asc'>A-Z</option>
            <option value='des'>Z-A</option>
          </select>
          <select onChange={e => handleFilterTypesFi(e)} key='typesFi' className={styles.filters} defaultValue='default'>
            <option value="default" disabled >Types of diets</option>
            <option value='All'>All</option>
            <option value='gluten free'>Gluten Free</option>
            <option value='dairy free'>Dairy Free</option>
            <option value='vegan'>Vegan</option>
            <option value='lacto ovo vegetarian'>Lacto-Ovo Vegetarian</option>
            <option value='pescatarian'>Pescatarian</option>
            <option value='paleolithic'>Paleolithic</option>
            <option value='primal'>Primal</option>
            <option value='fodmap friendly'>Low FODMAP</option>
            <option value='whole 30'>Whole30</option>
            <option value='vegetarian'>Vegeterian</option>
            <option value='ketogenic'>Ketogenic</option>
          </select>
          <select onChange={e => handleFilterTypes(e)} key='types' className={styles.filters} defaultValue='default'>
            <option value="default" disabled >Types of diets</option>
            <option value='All'>All</option>
            <option value='gluten free'>Gluten Free</option>
            <option value='dairy free'>Dairy Free</option>
            <option value='vegan'>Vegan</option>
            <option value='lacto ovo vegetarian'>Lacto-Ovo Vegetarian</option>
            <option value='pescatarian'>Pescatarian</option>
            <option value='paleolithic'>Paleolithic</option>
            <option value='primal'>Primal</option>
            <option value='fodmap friendly'>Low FODMAP</option>
            <option value='whole 30'>Whole30</option>
            <option value='vegetarian'>Vegeterian</option>
            <option value='ketogenic'>Ketogenic</option>
          </select>

          
        </div>
        <Paginate
          recipesPerPage={recipesPerPage}
          allRecipes={allRecipes.length}
          paginate={paginate}
        />
        <SearchBar />
        <div className={styles.cardsGrid}>
          {currentRecipes?.map((card) => {
            return (
              <Cards
                diet={card.diets}
                id={card.id}
                key={card.id}
                title={card.title}
                image={card.image ? card.image : <img src='https://i.pinimg.com/originals/66/88/f8/6688f8dc71df44c68bd0cf0eb1f5ee8c.jpg' alt="Imagen no encontrada" />}
                creditsText={card.creditsText}
              />
            )
          })
          }
        </div>
      </div>
    </div>
  )
}
/*
Ruta principal: debe contener

[✔️] Input de búsqueda para encontrar recetas por nombre
[✔️✔️] Área donde se verá el listado de recetas. Deberá mostrar su:
    Imagen
    Nombre
    Tipo de dieta (vegetariano, vegano, apto celíaco, etc)
[✔️] Botones/Opciones para filtrar por por tipo de dieta
[✔️✔️] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las recetas por orden alfabético y por health score (nivel de comida saludable).
[✔️✔️] Paginado para ir buscando y mostrando las siguientes recetas, 9 recetas por pagina, mostrando las primeros 9 en la primer pagina.
 */