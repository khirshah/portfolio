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
    });
  }

  createSlides(data) {
    const slides = [];
    let s = {};
    data.map(item => {
        
        s = {backgroundImage:item.bg};
        slides.push(        
          <div>
            <div style={s} className={styles.mySlide} />
            <Carousel.Caption>
              <a href={item.ref} target="blank"><h3>{item.title}</h3></a>
              {item.git != "" && <a href={item.git} target="blank"><h5>gitHub</h5></a>}
            </Carousel.Caption>
          </div>
        )
    })
    return slides
  }

  render() {
    const { index, direction } = this.state

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        interval={100000}
      >
        {this.createSlides(data).map((i,index) => <Carousel.Item key={index}>{i}</Carousel.Item>)}
      </Carousel>
    );
  }
}

