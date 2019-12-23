import React, { Component } from 'react';
import styles from "../styles/skills.css";
import data from "../data/skills.json";

export default class Skills extends Component {

  createSkillItems(skillList) {
    const skills = [];
    skillList.map(s => {
      skills.push(
        <div key={s} style={{backgroundImage: `url(/assets/icons/tools/${s.name}xxxhdpi.png)`}} className={styles.skill} title={s.title}/>
        )
    })
    return skills;
  }

  createSkillGroups() {
    let skillGroups = [];
    Object.keys(data).map(i => {
      skillGroups.push(
        <div key={i} className={`${styles.skillGroup} col-sm`}>
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