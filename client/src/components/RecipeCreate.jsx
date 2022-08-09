import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDiets } from "../redux/actions";
import styles from './RecipeCreate.module.css';
import axios from "axios";

function validate(post) {
  let imgValidate = /(https?:\/\/.*\.(?:png|jpg))/;
  let testTitle = /^[A-Z][a-z][^$()!¡@#/=¿{}?*%&|<>#]*$/;
  let errors = {};

  if (!post.title) {
    errors.title = 'Enter recipe name'
  }
  else if (!testTitle.test(post.title)) {
    errors.title = 'Start the title with capital letter. Only characters "":.,_- are accepted'
  }

  if (!post.summary) {
    errors.summary = 'Write a short summary'
  } else if (100 <= post.summary.length) {
    errors.summary = 'Not exceed 100 characters'
  }
  else if (!testTitle.test(post.summary)) {
    errors.summary = 'Start summary with capital letter. Only characters "":.,_- are accepted'
  }

  if (!post.creditsText) {
    errors.creditsText = 'Enter who the Honors are for'
  }
  else if (!testTitle.test(post.creditsText)) {
    errors.creditsText = 'Start with capital letter. Only characters "":.,_- are accepted'
  }

  if (!post.healthScore || post.healthScore < 0 || post.healthScore > 100) {
    errors.healthScore = 'Enter a value from 0 to 100'
  }

  if (!post.analyzedInstructions.length) {
    errors.analyzedInstructions = 'Write a series of steps on how to cook the recipe'
  }
  else if (!testTitle.test(post.analyzedInstructions)) {
    errors.analyzedInstructions = 'Start with capital letter. Only characters "":.,_- are accepted'
  }

  if (!post.image || !imgValidate.test(post.image)) {
    errors.image = 'Enter the URL of a representative image in jpg or png format'
  }

  if (!post.diet.length) {
    errors.diet = 'Choose at least one type of diet'
  }
  return errors;
}

export default function RecipeCreate() {
  const dispatch = useDispatch();
  const diet = useSelector((state) => state.diets);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getDiets())
  }, [dispatch])

  const [post, setPost] = useState({
    "title": "Anchi de Limón",
    "summary": "Comida y postre tradicional",
    "creditsText": "Abuela Emilia",
    "healthScore": 100,
    "analyzedInstructions": ["Hervir agua, Agregar Polenta, Azúcar y Jugo de Limón a gusto"],
    "image": "https://img-global.cpcdn.com/recipes/8e4ada7e89827ac2/1200x630cq70/photo.jpg",
    "diet": []
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

  async function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(errors).length > 0) alert("Por favor rellenar todos los campos")
    else {
      console.log('Error ', errors);
      console.log("Post ", post);
      await axios.post('http://localhost:3001/recipes', post);
      alert('¡Receta creada con éxito!');
      setPost({
        title: "",
        summary: "",
        creditsText: '',
        healthScore: 0,
        analyzedInstructions: [],
        image: "",
        diet: []
      })
    }
  };

  function handleSteps(e) {
    setPost({
      ...post,
      // analyzedInstructions: [e.target.value]
      analyzedInstructions: [...new Set([e.target.value])] //new set elimina los valores repetidos
    });
    setErrors(validate({
      ...post,
      analyzedInstructions: [...new Set([e.target.value])]
    }));
  }

  function handleSelectDiets(e) {
    if (!post.diet.includes(e.target.value))
      setPost({
        ...post,
        diet: Array.from(new Set([...post.diet, e.target.value]))
      });
    setErrors(validate({
      ...post,
      diet: Array.from(new Set([...post.diet, e.target.value]))
    }));
  };

  function handleDietDelete(diet) {
    setPost({
      ...post,
      diet: post.diet.filter(elemet => elemet !== diet)
    })
    setErrors(validate({
      ...post,
      diet: [...post.diet]
    }));

  };

  return (
    <div className={styles.container}>
      <div className={styles.bkgcolor}>
        <div className={styles.form}>
          <h1>Please fill in all the fields</h1>
          <form onSubmit={e => handleSubmit(e)}>
            <div>
              <label>🏷 Title</label>
              <input type="text" value={post.title} key='title' name='title' onChange={e => handleInputChange(e)} />
              {errors.title && (
                <p>{errors.title}</p>
              )}
            </div>
            <div>
              <label>📝 Summary</label>
              <input type='text' value={post.summary} key='summary' name='summary' onChange={e => handleInputChange(e)} />
              {errors.summary && (
                <p>{errors.summary}</p>
              )}
            </div>
            <div>
              <label>👏👏👏 Applause for</label>
              <textarea value={post.creditsText} key='creditsText' name='creditsText' onChange={e => handleInputChange(e)} />
              {errors.creditsText && (
                <p>{errors.creditsText}</p>
              )}
            </div>
            <div>
              <label>❤️ Health Score</label>
              <input type="number" min="0" max='100' value={post.healthScore} key='healthScore' name='healthScore' onChange={e => handleInputChange(e)} />
              {errors.healthScore && (
                <p>{errors.healthScore}</p>
              )}
            </div>
            <div>
              <label>📷 Image</label>
              <input type="text" value={post.image} key='image' name='image' onChange={e => handleInputChange(e)} />
              {errors.image && (
                <p>{errors.image}</p>
              )}
            </div>
            <div>
              <label>💃🕺 Instructions</label>
              <textarea value={post.analyzedInstructions} key='analyzedInstructions' name='analyzedInstructions' onChange={e => handleSteps(e)} />
              {errors.analyzedInstructions && (
                <p>{errors.analyzedInstructions}</p>
              )}
            </div>
            <div>
              <select onChange={e => handleSelectDiets(e)} defaultValue='default'
                className={styles.dietSelect}>
                <option value="default" disabled className={styles.dietOption}>Choose diets</option>
                {
                  diet && diet.map((d) => (
                    <option value={d.title} key={d.id} className={styles.dietOption}>{d.title}</option>
                  ))
                }
              </select>
              {errors.diet && (
                <p style={{ float: 'right' }}>{errors.diet}</p>
              )}
              {post.diet.map(d =>
                <div key={d.id} className={styles.divdiets}>
                  <p className={styles.selecteddiets}>{d}</p>
                  <button onClick={() => handleDietDelete(d)}
                    className={styles.buttonclose}>X</button>
                </div>
              )}
            </div>
            <button type='submit' className={styles.createButton} disabled={!post.title ? true : false} >Submit!</button>

          </form>
          <Link to='/home'>
            <button className={styles.createButton}>Back</button>
          </Link>
        </div>
      </div>
    </div>
  )
}


/* 
Anchi de limón

Comida y postre tradicional

Abuela Emilia

100

https://img-global.cpcdn.com/recipes/8e4ada7e89827ac2/1200x630cq70/photo.jpg 

Hervir agua
Agregar semola, limon y azúcar
Batir y listo, dejar enfriar para un buen manjar

*/