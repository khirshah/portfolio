import React, { Component } from 'react';
import styles from "./contactIcon.css"

export default class ContactIcon extends Component {
  render () {
    return (
      <div className={styles.contactIcon}> 
        <a href={this.props.link} target="blank"><div className={styles[this.props.name]} src={this.props.srcImg}/></a>
      </div>
      )
  }    
}