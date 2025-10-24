import javaScriptIcon from '/src/assets/icons/tools/javascript-logo.png'
import reactIcon from '/src/assets/icons/tools/react-logo.png'
import webpackIcon from '/src/assets/icons/tools/webpackxxxhdpi.png'
import nodeIcon from '/src/assets/icons/tools/nodejsxxxhdpi.png'
import expressIcon from '/src/assets/icons/tools/expressjsxxxhdpi.png'
import mongoIcon from '/src/assets/icons/tools/mongo1xxxhdpi.png'
import gitHubIcon from '/src/assets/icons/tools/git3xxxhdpi.png'
import herokuIcon from '/src/assets/icons/tools/herokuxxxhdpi.png'
import bashIcon from '/src/assets/icons/tools/bashxxxhdpi.png'
import sqlIcon from '/src/assets/icons/tools/sqlxxxhdpi.png'
import tsIcon from '/src/assets/icons/tools/typescript-logo.png'
import reduxIcon from '/src/assets/icons/tools/redux-logo.png'
import chartJsIcon from '/src/assets/icons/tools/chartjs-logo.svg'
import esriLogo from '/src/assets/icons/tools/esri-logo.png'
import figmaLogo from '/src/assets/icons/tools/figma-logo.png'
import copilotIcon from '/src/assets/icons/tools/githubcopilot-logo.png'
import jestLogo from '/src/assets/icons/tools/jest-logo.png'
import sassLogo from '/src/assets/icons/tools/Sass_Logo.svg'
import tailwindLogo from '/src/assets/icons/tools/tailwindcss-icon.svg'
import tanstackLogo from '/src/assets/icons/tools/tanstack-logo.png'
import vercelLogo from '/src/assets/icons/tools/Vercel-Light.svg'
import viteLogo from '/src/assets/icons/tools/vite-logo.svg'
import vitestLogo from '/src/assets/icons/tools/vitest-logo.svg'
import zustandLogo from '/src/assets/icons/tools/zustand-logo.svg'
import cypressLogo from '/src/assets/icons/tools/cypress-logo.png'
import testCafeLogo from '/src/assets/icons/tools/testcafe-logo.png'

const skillsData = {
  core: {
    title: 'CORE TECHNOLOGIES',
    items: [
      { name: 'javascript', title: 'JavaScript', icon: javaScriptIcon },
      { name: 'typescript', title: 'TypeScript', icon: tsIcon },
      { name: 'react', title: 'ReactJS', icon: reactIcon },
      { name: 'nodejs', title: 'NodeJS', icon: nodeIcon },
      { name: 'expressjs', title: 'ExpressJS', icon: expressIcon },
    ],
  },
  stateAndData: {
    title: 'STATE & DATA',
    items: [
      { name: 'redux', title: 'Redux', icon: reduxIcon },
      { name: 'zustand', title: 'Zustand', icon: zustandLogo },
      { name: 'tanstack', title: 'TanStack Query', icon: tanstackLogo },
      { name: 'mongo', title: 'MongoDB', icon: mongoIcon },
      { name: 'sql', title: 'SQL', icon: sqlIcon },
    ],
  },
  testing: {
    title: 'TESTING',
    items: [
      { name: 'jest', title: 'Jest', icon: jestLogo },
      { name: 'vitest', title: 'Vitest', icon: vitestLogo },
      { name: 'cypress', title: 'Cypress', icon: cypressLogo },
      { name: 'testcafe', title: 'TestCafe', icon: testCafeLogo },
    ],
  },
  buildTools: {
    title: 'BUILD & TOOLING',
    items: [
      { name: 'vite', title: 'Vite', icon: viteLogo },
      { name: 'webpack', title: 'Webpack', icon: webpackIcon },
      { name: 'copilot', title: 'GitHub Copilot', icon: copilotIcon },
      { name: 'bash', title: 'Bash', icon: bashIcon },
    ],
  },
  styling: {
    title: 'STYLING & DESIGN',
    items: [
      { name: 'sass', title: 'Sass', icon: sassLogo },
      { name: 'tailwind', title: 'Tailwind CSS', icon: tailwindLogo },
      { name: 'figma', title: 'Figma', icon: figmaLogo },
      { name: 'chartjs', title: 'Chart.js', icon: chartJsIcon },
      { name: 'esri', title: 'ESRI ArcGIS', icon: esriLogo },
    ],
  },
  deployment: {
    title: 'DEPLOYMENT & VERSION CONTROL',
    items: [
      { name: 'git', title: 'Git', icon: gitHubIcon },
      { name: 'vercel', title: 'Vercel', icon: vercelLogo },
      { name: 'heroku', title: 'Heroku', icon: herokuIcon },
    ],
  },
}

export default skillsData
