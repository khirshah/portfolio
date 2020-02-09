import React, { Component } from 'react';
import styles from "./menu.css";

export default class Menu extends Component {

  render() {
    return (
      <div className={`${styles.menuContainer} d-flex col-12`}>
        <div className={`${styles.menu} d-flex row w-100 m-0 justify-content-center`}>
          <div className='d-flex col-xs col-md-2 pt-md-1 p-0 justify-content-center'><a href="/" ><div className={`${styles.menuItem}`}>HOME</div></a></div>
          <div className='d-flex col-xs col-md-2 pt-md-1 p-0 justify-content-center'><a href="/projects/"><div className={`${styles.menuItem}`}>PROJECTS</div></a></div>         
          <div className='d-flex col-xs col-md-2 pt-md-1 p-0 justify-content-center'><a href="/about/"><div className={`${styles.menuItem}`}>ABOUT</div></a></div>
          <div className='d-flex col-xs col-md-2 pt-md-1 p-0 justify-content-center'><a href="#contactBar"><div className={`${styles.menuItem}`}>CONTACT</div></a></div>
        </div>
      </div>
    );
  }
}