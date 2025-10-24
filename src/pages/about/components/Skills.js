import React, { Component } from 'react'
import styles from '../styles/skills.css'
import skillsData from '../data/skills.js'

export default class Skills extends Component {
  constructor(props) {
    super(props)
    this.data = skillsData
  }

  createSkillItems(skillList) {
    const skills = []
    skillList.map((skill) => {
      skills.push(
        <img
          key={skill.name}
          src={skill.icon}
          className={styles.skillIcon}
          title={skill.title}
        />
      )
    })
    return skills
  }

  createSkillGroups() {
    let skillGroups = []
    Object.keys(this.data).map((i) => {
      skillGroups.push(
        <div key={i} className={`${styles.skillGroup} col`}>
          <div className={styles.skillGroupTitle}>{this.data[i].title}</div>
          <div className={styles.skillItems}>
            {this.createSkillItems(this.data[i].items)}
          </div>
        </div>
      )
    })

    return skillGroups
  }

  render() {
    return (
      <div className={styles.skillsContainer}>{this.createSkillGroups()}</div>
    )
  }
}
