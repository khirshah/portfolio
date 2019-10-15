import React, { Component } from 'react';
import Menu from "../../../components/Menu";
import ContactBar from "../../../components/ContactBar";
import Skills from "./Skills";
import styles from "../styles/about.css"

export default class About extends Component {
  render () {
    return (
      <div className={styles.about}> 
        <Menu/>
        <ContactBar/>
        <div className={styles.contentsContainer}>
          <Skills></Skills>
        </div>
      </div>
      )
  }    
}