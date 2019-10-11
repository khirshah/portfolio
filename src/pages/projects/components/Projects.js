import React, { Component } from 'react';
import Menu from "../../../components/Menu";
import ContactBar from "../../../components/ContactBar";
import ProjectsMenu from "./ProjectsMenu";
import ControlledCarousel from './Carousel';

import styles from "../styles/projects.css"

export default class Projects extends Component {
  render () {
    return (
      <div className={styles.projects}> 
        <Menu/>
        <ContactBar/>
        <div className={styles.contentsContainer}>
          <div className={styles.carouselContainer}>
            <div className={styles.carousel}>
              <ControlledCarousel />
            </div>
          </div>
          {/*<ProjectsMenu/>*/}
        </div>
      </div>
      )
  }    
}