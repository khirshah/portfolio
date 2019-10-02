import React, { Component } from 'react';
import styles from "./menu.css";

export default class Menu extends Component {
    render() {
        return (
          <div className={styles.menu}>
            <div className={styles.menuItem}><a href="/">Home</a></div>
            <div className={styles.menuItem}><a href="/projects/">Projects</a></div>          
            <div className={styles.menuItem}><a href="/about/">About</a></div>
          </div>
        );
    }
}