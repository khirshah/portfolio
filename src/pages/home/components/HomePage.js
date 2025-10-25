import React from 'react'
import Page from '../../../components/Page'
import GitHub from '../../../components/GitHub'
import styles from '../styles/homepage.css'
import Projects from '../../projects/components/Projects'
import About from '../../about/components/About'

const HomePage = () => {
  return (
    <Page>
      <div className={styles.textContainer}>
        <a href='#projects'></a>,<a href='#about'></a>
        <a href='#other'></a>
      </div>
      <GitHub gitlink='https://github.com/khirshah/' />
      <Projects />
      <About />
    </Page>
  )
}

export default HomePage
