import React, {Component } from 'react';
import styles from "./gitHub.css";

export default class GitHub extends Component {

    render() {
        const gitLogo = {backgroundImage: "url(/assets/icons/tools/git1xxxhdpi.png)"};
        return (
          <a href={this.props.gitlink} target="blank"> 
            <div style={gitLogo} className={styles.git}/>
          </a>
        );
    }
}