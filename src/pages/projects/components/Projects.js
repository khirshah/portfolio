import React from 'react'

//---------------------- COMPONENTS ------------------------------------
import ProjectItem from './ProjectItem'

//------------------------ DATA ----------------------------------------
import projectsData from '../data/projectsData.js'

//------------------------ STYLES --------------------------------------
import styles from '../styles/projects.css'

//----------------------- COMPONENT ------------------------------------

const Projects = () => {
  const data = projectsData()

  return (
    <>
      <a name='projects' className={styles.anchor}></a>
      <div className={styles.projects}>
        <div className={styles.projectsContainer}>
          <div className={`${styles.projectsTitle} text-center text-lg-left`}>
            PROJECTS
          </div>
          <div className={styles.projectItemsContainer}>
            {data.map((i, index) => {
              return (
                <ProjectItem
                  key={index}
                  image={i.bg}
                  desc={i.text}
                  title={i.title}
                  link={i.ref}
                  tools={i.tools}
                  git={i.git}
                ></ProjectItem>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
