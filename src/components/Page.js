import React, { Component } from 'react';
import Menu from "./Menu";
import ContactBar from "./ContactBar";
import styles from "./page.css";
import backGroundImage from "../assets/images/bg2.png";
export default class Page extends Component {
  render () {
    return (
      <div className={`${styles.page} ${this.props.styles} container-fluid`} style={{backgroundImage: `url('../assets/images/bg2.png')`}}>
        <div className={`${styles.pageHeader} d-flex col-12 p-0`}>
          <p>ÁGNES MÉRI<br/>WEB DEVELOPER</p>
          <Menu/>
        </div> 
        <div className={styles.contentsContainer}>
          {this.props.children}
        </div>
          <a name="contactBar"></a>
          <ContactBar/>
      </div>
    )
  }    
}