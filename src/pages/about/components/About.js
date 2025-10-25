import React from 'react'
import Skills from './Skills'
import Pdf from './Pdf'
import Video from './Video'
import styles from '../styles/about.module.css'
import paperIcon from '/src/assets/images/paperxhdpi.png'
import cvIcon from '/src/assets/images/cvxhdpi.png'

export default function About() {
  return (
    <>
      <div id='about' className={styles.anchor} />
      <div className={styles.about}>
        <div className={styles.section}>
          <h3 className={`${styles.title} text-center text-lg-left`}>SKILLS</h3>
          <Skills />
        </div>
        <div className={styles.section}>
          <h3 className={`${styles.title} text-center text-lg-left`}>CV</h3>
          <div
            className={`${styles.cvContainer} d-flex flex-row justify-content-center justify-content-lg-start`}
          >
            <Pdf
              title='CURRICULUM VITAE'
              link='https://drive.google.com/file/d/1EOTckTktLgeT6Vln20-rTVwBR-yWmgW1/view?usp=drive_link'
              image={cvIcon}
            />
          </div>
        </div>
        <div className={styles.section}>
          <h3 className={`${styles.title} text-center text-lg-left`}>
            PUBLICATIONS
          </h3>
          <div className={`${styles.publContainer} justify-content-lg-start`}>
            <Pdf
              title='MODELLING THE SPATIAL AND TEMPORAL DISPERSAL OF Cuscuta europea (Cuscutaceae)'
              link='https://www.researchgate.net/publication/278031594_MODELLING_THE_SPATIAL_AND_TEMPORAL_DISPERSAL_OF_CUSCUTA_EUROPEA_CUSCUTACEAE'
              image={paperIcon}
            />
            <Pdf
              title='TEMPORAL PATTERN ANALYSIS – A NEW ALGORITHM FOR DETECTING PATCH SIZE IN PLANT POPULATIONS'
              link='http://www.model.u-szeged.hu/data/files/t_38_1_article_h1dWqY.pdf'
              image={paperIcon}
            />
          </div>
        </div>
        <div id='other' className={styles.anchor} />
        <div className={styles.section}>
          <h3 className={`${styles.title} text-center text-lg-left`}>OTHER</h3>
          <div className={`${styles.publContainer} justify-content-lg-start`}>
            <Video title='PRESENTATION VIDEO - INTEGRATION TESTS' />
            <Pdf
              title='BLOG POST - REFINING WORK'
              link='https://drive.google.com/file/d/1yD3wmSj8SFyzB6D_iiWt478iAx4q1ouX/view'
              image={paperIcon}
            />
          </div>
        </div>
      </div>
    </>
  )
}
