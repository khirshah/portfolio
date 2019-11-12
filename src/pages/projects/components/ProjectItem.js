import React, { Component } from 'react';
import styles from "../styles/projectItem.css";
import data from "../data/projectsData.json";
import GitHub from "../../../components/GitHub";
import RedirectIcon from "../../../components/RedirectIcon";

export default class ProjectItem extends Component {
  
  createToolIcons(tools) {
    const toolIcons = [];
    tools.map(t => {
      toolIcons.push(
        <div key={t} style={{backgroundImage: `url(/assets/icons/tools/${t}xxxhdpi.png)`}} className={styles.toolIcon}></div>
        )
    })
    return toolIcons  
  }

  render () {
    return (
      <div className={styles.projectItem}>
        <div className={styles.projectPicture} style={{backgroundImage: this.props.image}} />
        <div className={styles.projectTitle}>{this.props.title}</div>
        <div className={styles.projectDescription}>
          <p>{this.props.desc}</p>
        </div>
        <div className={styles.iconBar}>
          <div className={styles.toolBar}>
            {this.createToolIcons(this.props.tools)}
          </div>
          <div className={styles.links}>
            {this.props.git != "" &&
              <div className={styles.git}>
                <GitHub gitlink={this.props.git}/>
              </div>
            }
            <div className={styles.download}>
              <RedirectIcon link={this.props.link}/>
            </div>
          </div>
        </div>
      </div>
      )
  }    
}