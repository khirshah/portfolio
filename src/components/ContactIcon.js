import React, { Component } from 'react';
import styles from "./contactIcon.css"

export default class ContactIcon extends Component {
  render () {
    return (
      <div className={styles.contactIcon}> 
        <img className={styles[this.props.name]} src={this.props.srcImg}></img>
      </div>
      )
  }    
}