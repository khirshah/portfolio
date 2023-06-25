import React, { Component } from 'react';

//---------------------- COMPONENTS ------------------------------------
import Page from "../../../components/Page";
import ProjectItem from './ProjectItem';

//------------------------ DATA ----------------------------------------
//import projectsData from "./data/projectsData.js";

//------------------------ STYLES --------------------------------------
import styles from "../styles/projects.css"

//----------------------- COMPONENT ------------------------------------

import calculatorImage from '/src/assets/images/calculator.png'
import popModelsImage from '/src/assets/images/population_models.png'
import moodTrackerImage from '/src/assets/images/mood_tracker.png'
import weatherAppImage from '/src/assets/images/weatherApp.png'
import ebaySearchImage from '/src/assets/images/ebaySearch.png'
import accountingAppImage from '/src/assets/images/accApp.png'
import competitionModelImage from '/src/assets/images/ca2.png'
import hostParasiteModelImage from '/src/assets/images/ca1.png'

import reactIcon from '/src/assets/icons/tools/reactxxxhdpi.png'
import webpackIcon from '/src/assets/icons/tools/webpackxxxhdpi.png'
import nodeIcon from '/src/assets/icons/tools/nodejsxxxhdpi.png'
import d3Icon from '/src/assets/icons/tools/d3jsxxxhdpi.png'
import expressIcon from '/src/assets/icons/tools/expressjsxxxhdpi.png'
import mongoIcon from '/src/assets/icons/tools/mongo1xxxhdpi.png'
import javaScriptIcon from '/src/assets/icons/tools/expressjsxxxhdpi.png'
import jQueryIcon from '/src/assets/icons/tools/jqueryxxxhdpi.png'


const projectsData = [
  {
    "title": "POPULATION MODELS",
    "name": "population_models",
    "ref": "https://agi-population-models.vercel.app/",
    "git":"https://github.com/khirshah/predator_prey",
    "bg": popModelsImage,
    "tools":[
      {
        "name": "react",
        "title": "ReactJS",
        "icon": reactIcon
      },
      {
        "name": "webpack",
        "title": "Webpack",
        "icon": webpackIcon
      },
      {
        "name": "nodejs",
        "title": "NodeJS",
        "icon": nodeIcon
      },
      {
        "name": "d3js",
        "title": "D3 JS",
        "icon": d3Icon
      }
    ],
    "text":"Interactive simulation of the Lotka-Voltera models written in ReactJS and D3 JS."
  },
  {
    "title": "MOOD TRACKER",
    "name": "mood_tracker",
    "ref": "https://agi-moodtracker-app.vercel.app/",
    "git":"https://github.com/khirshah/mood_tracker",
    "bg": moodTrackerImage,
    "tools":[
      {
        "name": "react",
        "title": "ReactJS",
        "icon": reactIcon
      },
      {
        "name": "webpack",
        "title": "Webpack",
        "icon": webpackIcon
      },
      {
        "name": "nodejs",
        "title": "NodeJS",
        "icon": nodeIcon
      }
    ],
    "text":"Ongoing pet project. The idea is to build an app that records mood and habit data of a person. Data will be analysed statistically and various stats and graphs will be available to view."
  },
  {
    "title": "WEATHER APP",
    "name": "weatherApp",
    "ref": "https://agi-weather-app.vercel.app/",
    "git":"https://github.com/khirshah/react_weather-app",
    "bg": weatherAppImage,
    "tools":[
      {
        "name": "react",
        "title": "ReactJS",
        "icon": reactIcon
      },
      {
        "name": "webpack",
        "title": "Webpack",
        "icon": webpackIcon
      },
      {
        "name": "nodejs",
        "title": "NodeJS",
        "icon": nodeIcon
      },
      {
        "name": "expressjs",
        "title": "ExpressJS",
        "icon": expressIcon
      }
    ],
    "text":"Application querying weather data from https://openweathermap.org/. It is backed with a separate expressjs server that sends the queries to the openweathermap.org public API and transfers the data to the client app. The client side application is built with ReactJS. the http requests are carried out with the axios npm package."
  },
  {
    "title": "EBAY SEARCH",
    "name": "ebaySearch",
    "ref": "https://agi-ebay-query.vercel.app/",
    "git":"https://github.com/khirshah/react_ebay-query",
    "bg": ebaySearchImage,
    "tools":[
      {
        "name": "react",
        "title": "ReactJS",
        "icon": reactIcon
      },
      {
        "name": "webpack",
        "title": "Webpack",
        "icon": webpackIcon
      },
      {
        "name": "nodejs",
        "title": "NodeJS",
        "icon": nodeIcon
      },
      {
        "name": "expressjs",
        "title": "ExpressJS",
        "icon": expressIcon
      }
    ],
    "text":"Application for carrying out search on Ebay. The separate server app (built with expressjs) sends queries to the Ebay public API. The data recieved is transferred to the client side application. I used ReactJS on the client side and the http request from client to server are carried out with the axios npm package."
  },
  {
    "title": "ACCOUNTING APP",
    "name": "accApp",
    "ref": "https://fract-acc-app-demo.vercel.app/",
    "git": "https://github.com/khirshah/fract-acc-app",
    "bg": accountingAppImage,
    "tools":[
      {
        "name": "jquery",
        "title": "JQuery",
        "icon": jQueryIcon
      },
      {
        "name": "webpack",
        "title": "Webpack",
        "icon": webpackIcon
      },
      {
        "name": "nodejs",
        "title": "NodeJS",
        "icon": nodeIcon
      },
      {
        "name": "expressjs",
        "title": "ExpressJS",
        "icon": expressIcon
      },
      {
        "name": "mongo1",
        "title": "MongoDB",
        "icon": mongoIcon
      }
    ],
    "text":"Demo of the accounting application that I made for inside use in our company. It gets real time exchange data from https://currencylayer.com/ public API. It has a currency exchange funcionality as well as other type of transactions can be entered and monitored."
  },
  {
    "title": "COMPETITION MODEL",
    "name": "ca1",
    "ref": "http://khirshah.fractalometry.com/competition-model/",
    "git":"",
    "bg": competitionModelImage,
    "tools":[
      {
        "name":"javascript",
        "title": "JavaScript",
        "icon": javaScriptIcon
      }
    ],
    "text":"Cellular automaton model of 2 competing species. Made with Vanilla JavaScript around 2013. The paramteres can be changed and the model behaviour changes accordingly. Default values ensure an almost equillibrium state of the model."
  },
  {
    "title": "HOST-PARASITE MODEL",
    "name": "ca2",
    "ref": "http://khirshah.fractalometry.com/host-parasite-model/",
    "git":"",
    "bg": hostParasiteModelImage,
    "tools":[
      {
        "name":"javascript",
        "title": "JavaScript",
        "icon": javaScriptIcon
      }
    ],
    "text":"Cellular automaton representation of a host-parasite model. I used this model and some alternatives for my PhD research. We built equivalent models in C++ without graphical representation to allow running them many times and statistically analyse the captured data. Related publication can be found on the About page of my website."
  },
  {
    "title": "CALCULATOR",
    "name": "calculator",
    "ref": "https://agi-portfolio-calculator.vercel.app/",
    "git":"https://github.com/khirshah/react_calculator",
    "bg": calculatorImage,
    "tools":[
      {
        "name": "react",
        "title": "ReactJS",
        "icon": reactIcon
      },
      {
        "name": "webpack",
        "title": "Webpack",
        "icon": webpackIcon
      },
      {
        "name": "nodejs",
        "title": "NodeJS",
        "icon": nodeIcon
      }
    ],
    "text":"My first project in ReactJS. It performs basic arithmetic operations: +, -, *, /"
  }
]

export default class Projects extends Component {

  constructor(props) {
    super(props);
    this.data = projectsData
  }
  
  createProjects = () => {
    const projects = this.data.map((i,index) => {
      return (
        <ProjectItem key={index} image={i.bg} desc={i.text} title={i.title} link={i.ref} tools={i.tools} git={i.git}>
        </ProjectItem>
      )
    })
    console.log(projects)
    return projects
  }

  render () {
    return (
      <>
        <a name="projects" className={styles.anchor}></a>
        <div className={styles.projects}>
          <div className={styles.projectsContainer}>
            <div className={`${styles.projectsTitle} text-center text-lg-left`}>PROJECTS</div>
            <div className={styles.projectItemsContainer}>
              {this.createProjects()}
            </div>
          </div>
        </div>
      </>
      )
  }    
}