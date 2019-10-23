import React, { Component } from 'react';
import Page from "../../../components/Page";
import Menu from "../../../components/Menu";
import ContactBar from "../../../components/ContactBar";
import Skills from "./Skills";
import Pdf from "./Pdf";
import styles from "../styles/about.css";

export default class About extends Component {
  render () {
    return (
      <Page styles={styles.about}>
          <Skills></Skills>
          <div className={styles.section}>
            <h3 className={styles.title}>Articles</h3>
            <div className={styles.pdfContainer}>
              <Pdf image="/assets/docs/article1.png" link="/assets/docs/MA_KJ_paper_PolishJE_coloured.pdf"/>
              <Pdf image="/assets/docs/article2.png" link="/assets/docs/t_38_1_article.pdf"/>
            </div>
          </div>
          <div className={styles.section}>
            <h3 className={styles.title}>CV</h3>
            <Pdf image="/assets/docs/cv.png" link="/assets/docs/CV_Agnes_Meri.pdf"/>
          </div>
      </Page>
      )
  }    
}