import React, { Component } from 'react';
import Page from "../../../components/Page";
import Skills from "./Skills";
import Pdf from "./Pdf";
import styles from "../styles/about.css";

export default class About extends Component {
  render () {
    return (
      <Page styles={styles.about}>
          <div className={styles.section}>
            <h3 className={`${styles.title} text-center text-lg-left`}>SKILLS</h3>
            <Skills/>
          </div>
          <div className={styles.section}>
            <h3 className={`${styles.title}  text-center text-lg-left`}>PUBLICATIONS</h3>
            <div className={styles.publContainer}>
              <Pdf title="MODELLING THE SPATIAL AND TEMPORAL DISPERSAL OF Cuscuta europea (Cuscutaceae)" 
                   link="assets/docs/MA_KJ_paper_PolishJE_coloured.pdf"
                   image="assets/images/paperxhdpi.png"/>
              <Pdf title="TEMPORAL PATTERN ANALYSIS – A NEW ALGORITHM FOR DETECTING PATCH SIZE IN PLANT POPULATIONS"
                   link="assets/docs/t_38_1_article.pdf"
                   image="./assets/images/paperxhdpi.png"/>
            </div>
          </div>
          <div className={styles.section}>
            <h3 className={`${styles.title}  text-center text-lg-left`}>CV</h3>
            <div className={`styles.cvContainer d-flex flex-row justify-content-center justify-content-lg-start`}>
              <Pdf title="CURRICULUM VITAE"
                   link="./assets/docs/CV_Agnes_Meri.pdf"
                   image="./assets/images/cvxhdpi.png"/>
            </div>
          </div>
      </Page>
      )
  }    
}