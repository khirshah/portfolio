import React, { Component } from 'react';
import styles from "./menu.css";

export default class Menu extends Component {

  render() {
    return (
      <div className={`${styles.menuContainer} d-flex col-12`}>
        <div className={`${styles.menu} d-flex flex-row col-12`}>
          <a href="/" className='d-flex col-xs-4 col-md-2 mw-100 p-0' ><div className={`${styles.menuItem} col-12`}>HOME</div></a>
          <a href="/projects/" className='d-flex col-xs-4 col-md-2 mw-100 p-0'><div className={`${styles.menuItem} col-12`}>PROJECTS</div></a>         
          <a href="/about/" className='d-flex col-xs-4 col-md-2 mw-100 p-0'><div className={`${styles.menuItem} col-12`}>ABOUT</div></a>
        </div>
      </div>
    );
  }
}