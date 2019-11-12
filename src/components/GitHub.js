import React, {Component } from 'react';
import styles from "./gitHub.css";

export default class GitHub extends Component {

    render() {
        return (
          <a href={this.props.gitlink} target="blank"> 
            <div style={{backgroundImage: "url(/assets/icons/tools/git1xxxhdpi.png)"}} className={styles.git}/>
          </a>
        );
    }
}