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
          <div className={styles.skillGroupTitle}>{data[i].title}</div>
          <div className={styles.skillIcons}>{this.createSkillItems(data[i].items)}</div>
        </div>
        )
    })

    return skillGroups;
  }

  render () {
    return (
      <div className={styles.skillsContainer}>
        <h3 className={styles.Title}>Skills</h3>
        {this.createSkillGroups()}
        <h3 className={styles.Title}>Articles</h3>
        <h3 className={styles.Title}>CV</h3>
      </div>
      )
  }    
}