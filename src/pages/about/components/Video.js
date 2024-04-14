import React, { Component } from 'react';
import styles from "../styles/pdf.css";

export default class Video extends Component {
  render () {
    return (
      <div className={styles.pdfContainer}>
        <a name="video"></a>
        <iframe 
          className={styles.video} 
          src="https://drive.google.com/file/d/1RNcP5anNGDfxi_Mr4a441DX6Z3gR1XhD/preview"
          width="400" 
          height="240"
        /> 
        <div className={styles.pdfTitle}>
          <div className={styles.text}>
              <p>
                  <a href={this.props.link} target="blank">{this.props.title}
                  </a>
              </p>
          </div>
        </div>
      </div>
      )
  }    
}