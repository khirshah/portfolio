import React, { useState, Component } from 'react';
import styles from "./gitHub.css";

export default class Menu extends Component {

    render() {
        const gitLogo = {backgroundImage: "url(/assets/icons/contact/GitHub/GitHub-Mark-Light-120px-plus.png)"};
        return (
          <a href={this.props.gitlink} target="blank"> 
            <div style={gitLogo} className={styles.git}/>
          </a>
        );
    }
}