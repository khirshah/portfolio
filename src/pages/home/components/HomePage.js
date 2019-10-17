import React, { Component } from 'react';
import Menu from "../../../components/Menu";
import ContactBar from "../../../components/ContactBar";
import GitHub from "../../../components/GitHub";
import styles from "../styles/homepage.css";


export default class HomePage extends Component {
  render () {
    const gitLogo = {backgroundImage: "url(/assets/icons/contact/GitHub/GitHub-Mark-Light-120px-plus.png)"};
    return (
      <div className={styles.homepage}> 
        <Menu/>
        <ContactBar/>
        <div className={styles.contents}>
          <div className={styles.textContainer}>
            <p>Welcome to my website!</p>
            <p>It is under development at the moment but the content is mainly ready.</p>
            <p>Feel free to have a look at my <a href="/projects/">projects</a>,</p>
            <p>or check out my <a href="/about/">skills and achievments.</a></p>
            <p>You can also follow the progress of the development on my github page:</p>
          </div>
          <GitHub gitlink="https://github.com/khirshah/portfolio/tree/develop"/>
        </div>
      </div>
      )
  }    
}