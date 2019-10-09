import React, { Component } from 'react';
import styles from "./contactBar.css";
import ContactIcon from "./ContactIcon";

export default class ContactBar extends Component {
  render () {
    return (
      <div className={styles.contactBar}> 
        <ContactIcon name={"github"} link={'https://github.com/khirshah'}/>
        <ContactIcon name={"linkedin"} link={'https://www.linkedin.com/in/agnes-meri-a50ba4173/'}/>
        <ContactIcon name={"gmail"} link={'mailto:agnes.meri.work@gmail.com'}/>
        <ContactIcon name={"codingame"} link={'https://www.codingame.com/profile/58a1a525989e591466fe576355e423c30494952'}/>
        <ContactIcon name={"hackerrank"} link={'https://www.hackerrank.com/miyoko'}/>
      </div>
      )
  }    
}