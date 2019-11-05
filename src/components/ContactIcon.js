import React, { Component } from 'react';
import styles from "./contactIcon.css"

export default class ContactIcon extends Component {
  render () {
    return (
        <a href={this.props.link} target="blank">
          <div className={`${styles[this.props.name]} ${styles.contactIcon}`}/>
        </a>
      )
  }    
}