import React from 'react'
import styles from '../styles/skills.css'
import skillsData from '../data/skills.js'

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      {Object.keys(skillsData).map((key) => (
        <div key={key} className={`${styles.skillGroup} col`}>
          <div className={styles.skillGroupTitle}>{skillsData[key].title}</div>
          <div className={styles.skillItems}>
            {skillsData[key].items.map((skill) => (
              <div>
                <img
                  key={skill.name}
                  src={skill.icon}
                  className={styles.skillIcon}
                  title={skill.title}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills
