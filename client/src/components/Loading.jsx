import styles from "./Loading.module.css"
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Loading() {
  return (
    <div className={styles.spinner}>
      <NavLink exact to="/" className={styles.a}>Loading...</NavLink>
    </div>
  );
}