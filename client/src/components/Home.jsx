import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../actions";
import { Link } from "react-router-dom";
import Cards from "./Card";
import Paginate from "./Paginate";
import "../styles/Home.css";


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

  useEffect(() => {
    dispatch(getRecipes())
  }, [dispatch])

  function handleClick(e) {
    e.preventDefault();
    dispatch(getRecipes());
  }
  function handleFilterTypes(e) {
    dispatch(filterRecipesByType(e.target.value))
    setCurrentPage(1)
  }

  return (
    <div>
      <div className="bodyHome">
        <div className="ingred">
          <h1>Hola</h1>
        </div>
        <h1>Recetas</h1>
        <Link to='/recipe'>
          <button className='bCrear' id='hC'>Crear receta</button>
        </Link>
        <button onClick={e => { handleClick(e) }}>Volver a cargar las recetas</button>
        <div>
          <select>
            <option value='asc'>Ascendente</option>
            <option value='des'>Descendente</option>
          </select>
          <select>
            <option value='gen'>Todos</option>
            <option value='vid'>Creados</option>
            <option value='vid'>Existente</option>
          </select>
          <select onChange={e => handleFilterTypes(e)}>
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
        {currentRecipes?.map((card) => {
          return (
            <Fragment>
              <Link to={"/home/" + card.id}>
                <Cards
                  title={card.title}
                  image={card.image ? card.image : <img src='https://i.pinimg.com/originals/66/88/f8/6688f8dc71df44c68bd0cf0eb1f5ee8c.jpg' alt="Imagen no encontrada" />}
                  creditsText={card.creditsText}
                  key={card.id} />
              </Link>
            </Fragment>
          )
        })
        }
      </div>
    </div>
  )
}
/*
Ruta principal: debe contener

[ ] Input de búsqueda para encontrar recetas por nombre
[ ] Área donde se verá el listado de recetas. Deberá mostrar su:
    Imagen
    Nombre
    Tipo de dieta (vegetariano, vegano, apto celíaco, etc)
[ ] Botones/Opciones para filtrar por por tipo de dieta
[ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las recetas por orden alfabético y por health score (nivel de comida saludable).
[✔️] Paginado para ir buscando y mostrando las siguientes recetas, 9 recetas por pagina, mostrando las primeros 9 en la primer pagina.
 */