import React, { Component } from 'react';
import Menu from "./Menu";
import ContactBar from "./ContactBar";
import styles from "./page.css";

export default class Page extends Component {
  render () {
    return (
      <div className={`${styles.page} ${this.props.styles} container-fluid`}> 
        
        <Menu/>
        <ContactBar/>
        <div className={styles.contentsContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }    
}