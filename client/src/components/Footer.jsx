import styles from "./Footer.module.css"
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <div className={styles.menu}>
      <NavLink exact to="/" className={styles.a}>About Me</NavLink>
    </div>
  );
}