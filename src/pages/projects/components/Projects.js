import React, { Component } from 'react';
import Menu from "../../../components/Menu";
import ProjectsMenu from "./ProjectsMenu";
import styles from "../styles/projects.css"

export default class Projects extends Component {
  render () {
    return (
      <div> 
        <Menu/>
        <ProjectsMenu/>
      </div>
      )
  }    
}