import React, { Component } from 'react';
import styles from "../styles/projectItem.css";
import data from "../data/projectsData.json";
import GitHub from "../../../components/GitHub";
import DownloadIcon from "../../../components/DownloadIcon";

export default class ProjectItem extends Component {
  
  createToolIcons(tools) {
    const toolIcons = [];
    let logo = {};
    tools.map(t => {
      logo = {backgroundImage: `url(/assets/icons/tools/${t}xxxhdpi.png)`};
      toolIcons.push(
        <div key={t} style={logo} className={styles.toolIcon}></div>
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
          {this.props.desc}
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
              <DownloadIcon link={this.props.link}/>
            </div>
          </div>
        </div>
      </div>
      )
  }    
}