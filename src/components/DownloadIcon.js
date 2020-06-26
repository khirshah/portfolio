import React, {Component } from 'react';
import styles from "./downloadIcon.css";

export default class DownloadIcon extends Component {

    render() {
        return (
          <div className={styles.iconContainer}>
            <a href={this.props.link} target="blank"> 
              <div className={styles.downloadIcon}/>
            </a>
          </div>
        );
    }
}