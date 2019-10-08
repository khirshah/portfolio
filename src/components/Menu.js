import React, { Component } from 'react';
import styles from "./menu.css";

export default class Menu extends Component {

    render() {
        return (
          <div className={styles.menu}>
            <a href="/"><div className={styles.menuItem}>Home</div></a>
            <a href="/projects/"><div className={styles.menuItem}>Projects</div></a>         
            <a href="/about/"><div className={styles.menuItem}>About</div></a>
          </div>
        );
    }
}