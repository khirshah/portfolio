import React, { Component } from 'react';

//---------------------- COMPONENTS ------------------------------------
import Page from "../../../components/Page";
import ProjectItem from './ProjectItem';

//------------------------ DATA ----------------------------------------
import projectsData from "/src/pages/projects/data/projectsData.js";

//------------------------ STYLES --------------------------------------
import styles from "../styles/projects.css"

//----------------------- COMPONENT ------------------------------------
export default class Projects extends Component {

  constructor(props) {
    super(props);
    this.data = projectsData
  }
  
  createProjects = () => {
    const projects = this.data.map((i,index) => {
      return (
        <ProjectItem key={index} image={i.bg} desc={i.text} title={i.title} link={i.ref} tools={i.tools} git={i.git}>
        </ProjectItem>
      )
    })
    console.log(projects)
    return projects
  }

  render () {
    return (
      <Page styles={styles.projects}>
        <div className={styles.projectsContainer}>
          <div className={`${styles.projectsTitle} text-center text-lg-left`}>PROJECTS</div>
          <div className={styles.projectItemsContainer}>
            {this.createProjects()}
          </div>
        </div>
      </Page>
      )
  }    
}