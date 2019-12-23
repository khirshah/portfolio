import React, { Component } from 'react';

//---------------------- COMPONENTS ------------------------------------
import Page from "../../../components/Page";
import Menu from "../../../components/Menu";
import ContactBar from "../../../components/ContactBar";
import ProjectItem from './ProjectItem';

//------------------------ DATA ----------------------------------------
import data from "../data/projectsData.json";

//------------------------ STYLES --------------------------------------
import styles from "../styles/projects.css"

//----------------------- COMPONENT ------------------------------------
export default class Projects extends Component {
  
  createProjects = () => {
    const projects = data.map((i,index) => {
      return (
        <ProjectItem key={index} image={i.bg} desc={i.text} title={i.title} link={i.ref} tools={i.tools} git={i.git}>
        </ProjectItem>
      )
    })

    return projects
  }

  render () {
    return (
      <Page styles={styles.projects}>
        <div className={styles.projectsContainer}>
          <div className={styles.projectsTitle}>PROJECTS</div>
          <div className={styles.projectItemsContainer}>
            {this.createProjects()}
          </div>
        </div>
      </Page>
      )
  }    
}