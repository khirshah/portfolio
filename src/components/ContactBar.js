import React, { Component } from 'react';
import styles from "./contactBar.css";
import ContactIcon from "./ContactIcon";
import githubLogo from "../icons/contact/GitHub/GitHub-Mark-120px-plus.png";

export default class ContactBar extends Component {
  render () {
    console.log()
    return (
      <div className={styles.contactBar}> 
        <ContactIcon name={"github"} srcImg={githubLogo}/>
        <ContactIcon name={"linkedin"} />
        <ContactIcon name={"gmail"} />
        <ContactIcon name={"codingame"} />
        <ContactIcon name={"hackerrank"} />
      </div>
      )
  }    
}