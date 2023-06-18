import React, {Component } from 'react';
import styles from "./gitHub.css";
import gitLogo from '/src/assets/icons/tools/git1xxxhdpi.png'

export default class GitHub extends Component {

    render() {
        return (
          <a href={this.props.gitlink} target="blank">
              <img className={styles.git} src={gitLogo}></img>
          </a>
        );
    }
}