import React, { Component } from 'react';
import styles from "./menu.css";

export default class Menu extends Component {

  render() {
    return (
      <div className={styles.menuContainer}>
        <div className={styles.menu}>
          <a href="/"><div className={styles.menuItem}>HOME</div></a>
          <a href="/projects/"><div className={styles.menuItem}>PROJECTS</div></a>         
          <a href="/about/"><div className={styles.menuItem}>ABOUT</div></a>
        </div>
      </div>
    );
  }
}