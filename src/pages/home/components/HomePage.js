import React, { Component } from 'react';
import Menu from "../../../components/Menu";
import ContactBar from "../../../components/ContactBar";
import styles from "../styles/homepage.css"

export default class HomePage extends Component {
  render () {
    return (
      <div className={styles.homepage}> 
        <Menu/>
        <ContactBar/>
      </div>
      )
  }    
}