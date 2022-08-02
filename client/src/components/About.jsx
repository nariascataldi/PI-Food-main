import styles from "./Loading.module.css"
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function About() {
  return (
    <div className={styles.about}>
      <NavLink exact to="/" className={styles.a}><h1>Néstor Arias</h1></NavLink>
    </div>
  );
}