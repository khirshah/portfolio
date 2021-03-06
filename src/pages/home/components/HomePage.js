import React, { Component } from 'react';
import Page from "../../../components/Page";
import Menu from "../../../components/Menu";
import ContactBar from "../../../components/ContactBar";
import GitHub from "../../../components/GitHub";
import styles from "../styles/homepage.css";


export default class HomePage extends Component {
  render () {
    const gitLogo = {backgroundImage: "url(/assets/icons/contact/GitHub/GitHub-Mark-Light-120px-plus.png)"};
    return (
      <Page styles={styles.homepage}> 
          <div className={styles.textContainer}>
            <p>Welcome to my website!</p>
            <p>Feel free to have a look at my <a href="/projects/">projects</a>,</p>
            <p>or check out my <a href="/about/">skills and achievments.</a></p>
            <p>You can also follow the development on</p>
            <p>my github page:</p>
          </div>
          <GitHub gitlink="https://github.com/khirshah/portfolio/tree/develop"/>
      </Page>
      )
  }    
}