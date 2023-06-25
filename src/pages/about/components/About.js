import React, { Component } from 'react';
import Skills from "./Skills";
import Pdf from "./Pdf";
import styles from "../styles/about.css";
import paperIcon from "/src/assets/images/paperxhdpi.png"
import cvIcon from "/src/assets/images/cvxhdpi.png"

export default class About extends Component {
  render () {
    return (
      <>
        <a name="about" className={styles.anchor}></a>
        <div className={styles.about}>
            <div className={styles.section}>
              <h3 className={`${styles.title} text-center text-lg-left`}>SKILLS</h3>
              <Skills/>
            </div>
            <div className={styles.section}>
              <h3 className={`${styles.title}  text-center text-lg-left`}>PUBLICATIONS</h3>
              <div className={styles.publContainer}>
                <Pdf title="MODELLING THE SPATIAL AND TEMPORAL DISPERSAL OF Cuscuta europea (Cuscutaceae)"
                     link="/src/assets/docs/MA_KJ_paper_PolishJE_coloured.pdf"
                     image={paperIcon}/>
                <Pdf title="TEMPORAL PATTERN ANALYSIS – A NEW ALGORITHM FOR DETECTING PATCH SIZE IN PLANT POPULATIONS"
                     link="/src/assets/docs/t_38_1_article.pdf"
                     image={paperIcon}/>
              </div>
            </div>
            <div className={styles.section}>
              <h3 className={`${styles.title}  text-center text-lg-left`}>CV</h3>
              <div className={`styles.cvContainer d-flex flex-row justify-content-center justify-content-lg-start`}>
                <Pdf title="CURRICULUM VITAE"
                     link="/src/assets/docs/CV_Agnes_Meri.pdf"
                     image={cvIcon}/>
              </div>
            </div>
        </div>
      </>
      )
  }    
}