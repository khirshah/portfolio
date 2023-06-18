import React, { Component } from 'react';
import styles from "./contactIcon.css"
import githubIcon from '/src/assets/icons/contact/git2xhdpi.png'
import linkedinIcon from '/src/assets/icons/contact/linkedinxhdpi.png'
import gmailIcon from '/src/assets/icons/contact/gmailxhdpi.png'
import codingameIcon from '/src/assets/icons/contact/codingamexhdpi.png'
import hackerRankIcon from '/src/assets/icons/contact/hackerxhdpi.png'

export default class ContactIcon extends Component {

  getIcon = () => {
    switch (this.props.name) {
      case "github":
        return githubIcon
      case "linkedin":
        return linkedinIcon
      case "gmail":
        return gmailIcon
      case "codingame":
        return codingameIcon
      case "hackerrank":
        return hackerRankIcon
      default:
        return null
    }
  }
  render () {
    return (
        <a href={this.props.link} target="blank">
            <img
              className={`${styles[this.props.name]} ${styles.contactIcon}`}
              src={this.getIcon()}
            />
        </a>
      )
  }    
}