import React, { useState, Component } from 'react';
import {Carousel} from 'react-bootstrap';
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';
import styles from "../styles/carousel.css";
import data from "../data/projectsData.json";

export default class ControlledCarousel extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
      hasGit: true
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
      title: "",
      desc:""
    });
  }

  handleDescChange(title,text) {
    this.setState({
      title: title,
      desc:text
    })
  }

  createSlides(data) {
    const slides = [];
    const gitLogo = {backgroundImage: "url(/assets/icons/contact/GitHub/GitHub-Mark-Light-120px-plus.png)"}
    let s = {};
    data.map(item => {
        s = {backgroundImage:item.bg};
        slides.push(        
          <div>
            <div className={styles.caption} >
              <a href={item.ref} target="blank"><h3>{data[this.state.index].title}</h3></a>
            </div>
            <div style={s} className={styles.image}/>
            {item.git != "" &&
              <a href={item.git} target="blank"> 
                <div className={styles.git} style={gitLogo}/>
              </a>}
          </div>
        )
    })
    return slides
  }

  render() {
    const { index, direction } = this.state

    return (
      <div className={styles.carousel}>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          interval={100000}
        >
          {this.createSlides(data).map((i,index) => <Carousel.Item className={styles.mySlide} key={name}>{i}</Carousel.Item>)}
        </Carousel>
        <div className={styles.description}>
          <p>{data[this.state.index].text}</p>
        </div>
      </div>
    );
  }
}

