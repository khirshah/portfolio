import React, { Component } from 'react';
import styles from "../styles/skills.css";
import data from "../data/skills.json";

export default class Skills extends Component {

  createSkillItems(skillList) {
    const skills = [];
    skillList.map(skill => {
      skills.push(
        <div key={skill.name} style={{backgroundImage: `url(/assets/icons/tools/${skill.name}xxxhdpi.png)`}} className={styles.skillIcon} title={skill.title}/>
        )
    })
    return skills;
  }

  createSkillGroups() {
    let skillGroups = [];
    Object.keys(data).map(i => {
      skillGroups.push(
        <div key={i} className={`${styles.skillGroup} col`}>
          <div className={styles.skillGroupTitle}>{data[i].title}</div>
          <div className={styles.skillItems}>{this.createSkillItems(data[i].items)}</div>
        </div>
      );
    });

    return skillGroups;
  }

  render () {
    return (
      <div className={styles.skillsContainer}>
        {this.createSkillGroups()}
      </div>
      )
  }    
}