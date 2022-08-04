import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { recipeDetail } from "../actions";
import style from "./Detail.module.css";
import Loading from "./Loading";

export default function RecipeDetail() {
  console.log('DETAIL ');
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(recipeDetail(id));
  }, [dispatch, id]);

  const detailedRecipe = useSelector(state => state.detail)
  console.log(detailedRecipe)

  return (
    <div className={style.component}>
      {
        detailedRecipe.length>0 ?
          <div>
            <h1 className={style.title}>{detailedRecipe[0].title}</h1>
            <div className={style.imgContainer}>
              <img src={detailedRecipe[0].image} alt='img not found'
                width="500px" height="400px" className={style.img} />
            </div>
            <div className={style.detailContainer}>
              <h3 className={style.h3}>Healthy Food level: {detailedRecipe[0].healthScore} </h3>
              <h3 className={style.h3}>Instructions:</h3>
              <p className={style.p} dangerouslySetInnerHTML={{ __html: detailedRecipe[0].analyzedInstructions }}></p>
              <h3 className={style.h3}>Summary:</h3><p className={style.p} dangerouslySetInnerHTML={{ __html: detailedRecipe[0].summary }}></p>
              <h3 className={style.h3}>Diet types:</h3><ul className={style.p}>{detailedRecipe[0].diets.map(d => <li className={style.li}>{d.title}</li>)}</ul>
            </div>
          </div> 
          :
          <div className={style.loading}><Loading></Loading></div>
      }
    </div>
  )
};

/*
Ruta de detalle de receta: debe contener

[ ] Los campos mostrados en la ruta principal para cada receta (imagen, nombre, tipo de plato y tipo de dieta)
[ ] Resumen del plato
[ ] Nivel de "comida saludable" (health score)
[ ] Paso a paso
*/