import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postRecipe, getDiets } from "../actions";
import styles from './RecipeCreate.module.css'

function validate(post) {
  let errors = {};
  if (!post.title) {
    errors.title = 'Ingresar nombre de la receta'
  }
  if (!post.summary) {
    errors.summary = 'Escribe un breve resumen'
  }
  if (!post.creditsText) {
    errors.creditsText = 'Ingresa para quién son los Honores'
  }
  if (!post.healthScore || post.healthScore < 0 || post.healthScore > 100) {
    errors.healthScore = 'Ingresa un valor de 0 a 100'
  }
  if (!post.analyzedInstructions.length) {
    errors.analyzedInstructions = 'Escribe una serie de pasos sobre cómo cocinar la receta'
  }
  if (!post.image) {
    errors.image = 'Ingresar URL de alguna imagen representativa'
  }
  if (!post.diets.length) {
    errors.diets = 'Elige al menos un tipo de dieta'
  }
  return errors;
}

export default function RecipeCreate() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getDiets())
  }, [dispatch])

  const [post, setPost] = useState({
    title: '',
    summary: '',
    creditsText: '',
    healthScore: 0,
    analyzedInstructions: [],
    image: '',
    diets: []
  })
  function handleInputChange(e) {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...post,
      [e.target.name]: e.target.value
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(errors).length > 0) alert("Por favor rellenar todos los campos")
    else {
      dispatch(postRecipe(post))
      alert('¡Receta creada con éxito!')
    }
  };

  function handleSelectDiets(e) {
    if (!post.diets.includes(e.target.value))
      setPost({
        ...post,
        diets: [...post.diets, e.target.value]
      });
    setErrors(validate({
      ...post,
      diets: [...post.diets, e.target.value]
    }));
  };

  function handleSteps(e) {
    setPost({
      ...post,
      analyzedInstructions: [e.target.value]
    });
    setErrors(validate({
      ...post,
      analyzedInstructions: e.target.value
    }));
  }

  function handleDietDelete(diet) {
    setPost({
      ...post,
      diets: post.diets.filter(elemet => elemet !== diet)
    })
    setErrors(validate({
      ...post,
      diets: [...post.diets]
    }));

  };

  return (
    <div className={styles.container}>
      <div className={styles.bkg} />
      <div className={styles.bkgcolor}>
        <div className={styles.form}>
          <h1>Please fill in all the fields</h1>
          <form onSubmit={e => handleSubmit(e)}>
            <div>
              <label>🏷 Title</label>
              <input type="text" value={post.title} name='title' onChange={e => handleInputChange(e)} />
              {errors.title && (
                <p>{errors.title}</p>
              )}
            </div>
            <div>
              <label>📝 Summary</label>
              <textarea value={post.summary} name='summary' onChange={e => handleInputChange(e)} />
              {errors.summary && (
                <p>{errors.summary}</p>
              )}
            </div>
            <div>
              <label>👏👏👏 Applause for</label>
              <textarea value={post.creditsText} name='creditsText' onChange={e => handleInputChange(e)} />
              {errors.creditsText && (
                <p>{errors.creditsText}</p>
              )}
            </div>
            <div>
              <label>❤️ Health Score</label>
              <input type="number" min="0" max='100' value={post.healthScore} name='healthScore' onChange={e => handleInputChange(e)} />
              {errors.healthScore && (
                <p>{errors.healthScore}</p>
              )}
            </div>
            <div>
              <label>📷 Image</label>
              <input type="text" value={post.image} name='image' onChange={e => handleInputChange(e)} />
              {errors.image && (
                <p>{errors.image}</p>
              )}
            </div>
            <div>
              <label>💃🕺 Instructions</label>
              <textarea value={post.analyzedInstructions} name='analyzedInstructions' onChange={e => handleSteps(e)} />
              {errors.analyzedInstructions && (
                <p>{errors.analyzedInstructions}</p>
              )}
            </div>
            <div>
              <select onChange={e => handleSelectDiets(e)} defaultValue='default'
                className={styles.dietSelect}>
                <option value="default" disabled className={styles.dietOption}>Choose diets</option>
                {
                  diets && diets.map(d => (
                    <option value={d.name} key={d.id} className={styles.dietOption}>{d.name}</option>
                  ))
                }
              </select>
              {errors.diets && (
                <p style={{ float: 'right' }}>{errors.diets}</p>
              )}
              {post.diets.map(d =>
                <div key={d.id} className={styles.divdiets}>
                  <p className={styles.selecteddiets}>{d}</p>
                  <button onClick={() => handleDietDelete(d)}
                    className={styles.buttonclose}>X</button>
                </div>
              )}
            </div>
            <button type='submit' className={styles.createButton}>Submit!</button>
          </form>
          <Link to='/home'>
            <button className={styles.createButton}>Back</button>
          </Link>
        </div>
      </div>
    </div>
  )
}


/* Imágen del Anchi
https://img-global.cpcdn.com/recipes/8e4ada7e89827ac2/1200x630cq70/photo.jpg 
*/