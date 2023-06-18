import React, {Component } from 'react';
import styles from "./redirectIcon.css";
import redirectIcon from '/src/assets/images/linkxxxhdpi.png'

export default class RedirectIcon extends Component {

    render() {
        return (
          <a href={this.props.link} target="blank">
              <img
                src={redirectIcon}
                className={styles.redirectIcon}
              />
          </a>
        );
    }
}