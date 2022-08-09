import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from './SearchBar.module.css'

import { getRecipesTitle } from "../redux/actions";

export default function SearchBar() {
  const dispatch = useDispatch("")
  const [title, setTitle] = useState("")

  function handleInputChange(e) {
    e.preventDefault()
  
    setTitle(e.target.value)

  }
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(getRecipesTitle(title))
    setTitle('')  //me falta darle al value
    }

  return (

    <div className={styles.searchBar}>
      <input
        icon='search'
        type='text'
        value={title}
        placeholder="Search..."
        onChange={(e) => handleInputChange(e)}
        className={styles.input}
      />
      <button className={styles.button} type='submit' onClick={(e) => handleSubmit(e)}>Search</button>
    </div>
  )
}
/**
 * TODO: ver la app de clima el css
 */