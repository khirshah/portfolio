import html5Icon from '/src/assets/icons/tools/html5xxxhdpi.png'
import cssIcon from '/src/assets/icons/tools/cssxxxhdpi.png'
import jsxIcon from '/src/assets/icons/tools/jsxxxxhdpi.png'
import bootStrapIcon from '/src/assets/icons/tools/bootstrapxxxhdpi.png'
import javaScriptIcon from '/src/assets/icons/tools/javascriptxxxhdpi.png'
import reactIcon from '/src/assets/icons/tools/reactxxxhdpi.png'
import webpackIcon from '/src/assets/icons/tools/webpackxxxhdpi.png'
import nodeIcon from '/src/assets/icons/tools/nodejsxxxhdpi.png'
import d3Icon from '/src/assets/icons/tools/d3jsxxxhdpi.png'
import expressIcon from '/src/assets/icons/tools/expressjsxxxhdpi.png'
import mongoIcon from '/src/assets/icons/tools/mongo1xxxhdpi.png'
import jQueryIcon from '/src/assets/icons/tools/jqueryxxxhdpi.png'
import gitHubIcon from '/src/assets/icons/tools/git3xxxhdpi.png'
import herokuIcon from '/src/assets/icons/tools/herokuxxxhdpi.png'
import bashIcon from '/src/assets/icons/tools/bashxxxhdpi.png'
import sqlIcon from '/src/assets/icons/tools/sqlxxxhdpi.png'

const skillsData = {
  html: {
    title: 'HTML',
    items: [
      {
        name: 'html5',
        title: 'HTML5',
        icon: html5Icon,
      },
      {
        name: 'jsx',
        title: 'JSX',
        icon: jsxIcon,
      },
    ],
  },
  css: {
    title: 'CSS',
    items: [
      {
        name: 'css',
        title: 'CSS',
        icon: cssIcon,
      },
      {
        name: 'bootstrap',
        title: 'Bootstrap',
        icon: bootStrapIcon,
      },
    ],
  },
  javascript: {
    title: 'JAVASCRIPT',
    items: [
      {
        name: 'javascript',
        title: 'JavaScript',
        icon: javaScriptIcon,
      },
      {
        name: 'react',
        title: 'ReactJS',
        icon: reactIcon,
      },
      {
        name: 'nodejs',
        title: 'NodeJS',
        icon: nodeIcon,
      },
      {
        name: 'expressjs',
        title: 'ExpressJS',
        icon: expressIcon,
      },
      {
        name: 'jquery',
        title: 'JQuery',
        icon: jQueryIcon,
      },
    ],
  },
  database: {
    title: 'DATABASE',
    items: [
      {
        name: 'mongo1',
        title: 'MongoDB',
        icon: mongoIcon,
      },
      {
        name: 'sql',
        title: 'SQL',
        icon: sqlIcon,
      },
    ],
  },
  other: {
    title: 'OTHER',
    items: [
      {
        name: 'webpack',
        title: 'Webpack',
        icon: webpackIcon,
      },
      {
        name: 'git3',
        title: 'Git',
        icon: gitHubIcon,
      },
      {
        name: 'heroku',
        title: 'Heroku',
        icon: herokuIcon,
      },
      {
        name: 'bash',
        title: 'Bash',
        icon: bashIcon,
      },
    ],
  },
}

export default skillsData
