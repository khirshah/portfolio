import React, { Component } from 'react';
import styles from "../styles/pdf.css";
import DownloadIcon from "../../../components/DownloadIcon";

export default class About extends Component {
  render () {
    return (
      <div className={styles.pdfContainer}>
        <div style={{backgroundImage: `url(${this.props.image})`}} className={styles.pdfImg}/>
        <div className={styles.pdfTitle}>
          <div className={styles.text}><p>{this.props.title}</p></div>
          <DownloadIcon link={this.props.link}/>
        </div>
      </div>
      )
  }    
}