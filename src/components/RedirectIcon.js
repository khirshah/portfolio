import React, {Component } from 'react';
import styles from "./redirectIcon.css";

export default class RedirectIcon extends Component {

    render() {
        return (
          <a href={this.props.link} target="blank"> 
            <div className={styles.redirectIcon}/>
          </a>
        );
    }
}