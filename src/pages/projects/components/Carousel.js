import React, { useState, Component } from 'react';
import {Carousel} from 'react-bootstrap';
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';
import styles from "../styles/carousel.css"

export default class ControlledCarousel extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        interval={5000}
      >
        <Carousel.Item>
          <div className={styles.firstSlide}/>
          <Carousel.Caption>
            <a href="https://agi-weather-app.herokuapp.com/" target="blank"><h3>Weather App</h3></a>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.secondSlide}/>
          <Carousel.Caption>
            <a href="https://agi-ebay-query.herokuapp.com/" target="blank"><h3>Ebay Search</h3></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.thirdSlide}/>

          <Carousel.Caption>
            <a href="http://khirshah.fractalometry.com/competition-model/" target="blank"><h3>Cellular automaton</h3></a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

