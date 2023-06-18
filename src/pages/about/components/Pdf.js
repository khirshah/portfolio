import React, { Component } from 'react';
import styles from "../styles/pdf.css";
import DownloadIcon from "../../../components/DownloadIcon";

export default class About extends Component {
  render () {
    return (
      <div className={styles.pdfContainer}>
        <a href={this.props.link} target="blank">
            <img src={this.props.image} className={styles.pdfImg}/>
        </a>
        <div className={styles.pdfTitle}>
          <div className={styles.text}>
              <p>
                  <a href={this.props.link} target="blank">{this.props.title}
                  </a>
              </p>
          </div>
          <DownloadIcon link={this.props.link}/>
        </div>
      </div>
      )
  }    
}