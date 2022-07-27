import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../actions";
import { Link } from "react-router-dom";
import Cards from "./Card";
import "../styles/Home.css"

const PUMA = 'https://i.pinimg.com/originals/66/88/f8/6688f8dc71df44c68bd0cf0eb1f5ee8c.jpg';

//hook
export default function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getRecipes())
  }, [dispatch])

  function handleClick(e) {
    e.preventDefault();
    dispatch(getRecipes());
  }

  return (
    <div className="bodyHome">
      <Link to='/recipe'>Crear receta</Link>
      <h1>Aguante SALTA la linda</h1>
      <button onClick={e => { handleClick(e) }}>Volver a cargar las recetas</button>
      <div>
        {/* aquí entrarían los filtros */}
        <select>
          <option value='asc'>Ascendente</option>
          <option value='des'>Descendente</option>
        </select>
        <select>
          <option value='gen'>Todos</option>
          <option value='vid'>Creados</option>
          <option value='vid'>Existente</option>
        </select>
        <select>
          <option value="All">Todos</option>
          <option value="Alive">Vivo</option>
          <option value="Deceased">Muerto</option>
          <option value="Unknown">Desconocido</option>
          <option value="Presumed dead">Probablemente muerto</option>
        </select>
        {
          allRecipes?.map((r) => {
            return (
              <Fragment>
                <Link to={"/home/" + r.id}>
                  <Cards
                    title={r.title}
                    image={r.image ? r.image : <img src={PUMA} alt="Imagen no encontrada" />}
                    creditsText={r.creditsText}
                    key={r.id} />
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
[ ] Paginado para ir buscando y mostrando las siguientes recetas, 9 recetas por pagina, mostrando las primeros 9 en la primer pagina.
 */