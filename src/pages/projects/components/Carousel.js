import React, { useState, Component } from 'react';
import GitHub from "../../../components/GitHub";
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
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  createSlides(d) {
    const slides = [];
    let s = {};
    d.map(item => {
        s = {backgroundImage:item.bg};
        slides.push(        
          <div key={item.name}>
            <div style={s} className={styles.image}/>
            {item.git != "" &&
              <div className={styles.git}>
                <GitHub gitlink={item.git}/>
              </div>
            }
          </div>
        )
    })
    return slides
  }

  createToolIcons(tools) {
    const toolIcons = [];
    let logo = {};
    tools.map(t => {
      logo = {backgroundImage: `url(/assets/icons/tools/${t}.png)`};
      toolIcons.push(
        <div key={t} style={logo} className={styles.toolIcon}></div>
        )
    })
    return toolIcons  
  }

  render() {
    const { index, direction } = this.state

    return (
      <div className={styles.carousel}>
        <div className={styles.caption} >
          <a href={data[this.state.index].ref} target="blank"><h3>{data[this.state.index].title}</h3></a>
        </div>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          interval={100000}
        >
          {this.createSlides(data).map((i,index) => <Carousel.Item className={styles.mySlide} key={index}>{i}</Carousel.Item>)}
        </Carousel>
        <div className={styles.toolBar}>{this.createToolIcons(data[this.state.index].tools)}</div>
        <div className={styles.description}>
          <p>{data[this.state.index].text}</p>
        </div>
      </div>
    );
  }
}

