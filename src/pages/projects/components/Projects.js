import React, { Component } from 'react';
import Menu from "../../../components/Menu";
import ContactBar from "../../../components/ContactBar";
import ProjectsMenu from "./ProjectsMenu";
import styles from "../styles/projects.css"

export default class Projects extends Component {
  render () {
    return (
      <div className={styles.projects}> 
        <Menu/>
        <div className={styles.contentsContainer}>
          <ContactBar/>
          <ProjectsMenu/>
        </div>
      </div>
      )
  }    
}