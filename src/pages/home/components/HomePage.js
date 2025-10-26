import React from 'react'
import Page from '../../../components/Page'
import styles from '../styles/homepage.module.css'
import Projects from '../../projects/components/Projects'
import About from '../../about/components/About'
import introText from '../../projects/data/introText'

const HomePage = () => {
  return (
    <Page>
      <div className={styles.textContainer}>
        <h2>{introText.greeting}</h2>
        <p>{introText.body}</p>
        <p>{introText.closing}</p>
      </div>
      <Projects />
      <About />
    </Page>
  )
}

export default HomePage
