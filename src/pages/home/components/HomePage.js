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
            <p>Feel free to browse my <a href="#projects">pet projects</a>,</p>
            <p>Please note that these projects are now about 4 years old and I'm keeping them up to date, but the coding style is outdated.</p>
            <p>You can also check out my <a href="#about">skills and achievments.</a></p>
            <p>There is a <a href="#video">video preview</a> of me presenting about integration tests with testing-library and mock-service-worker</p>
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