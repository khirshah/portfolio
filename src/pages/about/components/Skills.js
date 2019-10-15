import React, { Component } from 'react';
import styles from "../styles/skills.css";
import data from "../data/skills.json";

export default class Skills extends Component {

  createSkillItems(skillList) {
    const skills = [];
    let style = {};
    skillList.map(s => {
      style = {backgroundImage: `url(/assets/icons/tools/${s}.png)`};
      skills.push(
        <div key={s} style={style} className={styles.skill}/>
        )
    })
    return skills;
  }

  createSkillGroups() {
    let skillGroups = [];
    Object.keys(data).map(i => {
      skillGroups.push(
        <div key={i} className={styles.skillGroup}>
          <div className={styles.skillGroupTitle}>{i}</div>
          {this.createSkillItems(data[i])}
        </div>
        )
    })

    return skillGroups;
  }

  render () {
    return (
      <div className={styles.skillsContainer}>{this.createSkillGroups()}</div>
      )
  }    
}