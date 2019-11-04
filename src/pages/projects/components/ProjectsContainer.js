import React, { Component } from 'react';
import styles from "../styles/projectsContainer.css";
import data from "../data/projectsData.json";
import ProjectItem from './ProjectItem';

export default class ProjectsContainer extends Component {
  
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
      <div className={styles.projectsContainer}>
        {this.createProjects()}
      </div>
      )
  }    
}