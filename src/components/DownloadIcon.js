import React, {Component } from 'react';
import styles from "./downloadIcon.css";

export default class DownloadIcon extends Component {

    render() {
        return (
          <a href={this.props.link} target="blank"> 
            <div className={styles.downloadIcon}/>
          </a>
        );
    }
}