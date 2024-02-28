import React, { Component } from 'react';
import Page from "../../../components/Page";
import GitHub from "../../../components/GitHub";
import styles from "../styles/homepage.css";
import Projects from "../../projects/components/Projects";
import About from "../../about/components/About";


export default class HomePage extends Component {
  render () {
    return (
      <Page> 
          <div className={styles.textContainer}>
            <p>Welcome to my website!</p>
            <p>I'm a mid level frontend engineer with some years of backend experience</p>
            <p>
              <span>
              The areas I'm passionate about are testing, data handling (currently Redux Toolkit), React component logic, TypeScript, routing and authentication.
              </span>
            </p>
            <p>Have a look at my <a href="#projects">pet projects</a>,</p>
            <p>and check out my <a href="#about">skills and achievments.</a></p>
            <p>You can also browse my projects on</p>
            <p>my github page:</p>
          </div>
          <GitHub gitlink="https://github.com/khirshah/"/>
        <Projects />
        <About />
      </Page>
      )
  }    
}