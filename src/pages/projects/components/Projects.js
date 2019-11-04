import React, { Component } from 'react';
import Page from "../../../components/Page";
import Menu from "../../../components/Menu";
import ContactBar from "../../../components/ContactBar";
import ProjectsContainer from './ProjectsContainer';
import styles from "../styles/projects.css"

export default class Projects extends Component {
  render () {
    return (
      <Page styles={styles.projects}>
        <ProjectsContainer/>
      </Page>
      )
  }    
}