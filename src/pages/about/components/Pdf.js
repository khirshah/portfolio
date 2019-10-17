import React, { Component } from 'react';
import styles from "../styles/pdf.css";

export default class About extends Component {
  render () {
    console.log(this.props.image)
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