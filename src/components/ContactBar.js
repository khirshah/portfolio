import React, { Component } from 'react';
import styles from "./contactBar.css";
import ContactIcon from "./ContactIcon";

export default class ContactBar extends Component {
  render () {
    console.log()
    return (
      <div className={styles.contactBar}> 
        <ContactIcon name={"github"} />
        <ContactIcon name={"linkedin"} />
        <ContactIcon name={"gmail"} />
        <ContactIcon name={"codingame"} />
        <ContactIcon name={"hackerrank"} />
      </div>
      )
  }    
}