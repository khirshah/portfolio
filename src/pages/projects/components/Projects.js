import React, { Component } from 'react';
import Page from "../../../components/Page";
import Menu from "../../../components/Menu";
import ContactBar from "../../../components/ContactBar";
import ControlledCarousel from './Carousel';
import styles from "../styles/projects.css"

export default class Projects extends Component {
  render () {
    return (
      <Page styles={styles.projects}>
          <div className={styles.carouselContainer}>
            <ControlledCarousel />
          </div>
      </Page>
      )
  }    
}