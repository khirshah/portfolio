import React, { Component } from 'react';
import styles from "../styles/pdf.css";

export default class About extends Component {
  render () {
    const style = {
      backgroundImage: `url(${this.props.image})`
    };
    return (
      <a href={this.props.link} target="_blank">
        <div style={style} className={styles.pdfImg}/> 
      </a>
      )
  }    
}