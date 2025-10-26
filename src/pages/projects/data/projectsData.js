import popModelsImage from '/src/assets/images/predator_prey.png'
import competitionModelImage from '/src/assets/images/ca2.png'
import hostParasiteModelImage from '/src/assets/images/ca1.png'

import reactIcon from '/src/assets/icons/tools/react-logo.png'
import webpackIcon from '/src/assets/icons/tools/webpackxxxhdpi.png'
import nodeIcon from '/src/assets/icons/tools/nodejsxxxhdpi.png'
import d3Icon from '/src/assets/icons/tools/d3jsxxxhdpi.png'
import javaScriptIcon from '/src/assets/icons/tools/javascript-logo.png'
import esriIcon from '/src/assets/icons/tools/esri-logo.png'
import arcGISImage from '/src/assets/images/arcGIS.png'
import typescriptIcon from '/src/assets/icons/tools/typescript-logo.png'

const projectsData = () => [
  {
    title: 'ARC GIS MAP VIEWER',
    name: 'map_viewer',
    ref: 'https://agi-arcgis-map-viewer.vercel.app/',
    git: 'https://github.com/khirshah/arcgis-map-viewer',
    bg: arcGISImage,
    tools: [
      {
        name: 'react',
        title: 'ReactJS',
        icon: reactIcon,
      },
      {
        name: 'typescript',
        title: 'TypeScript',
        icon: typescriptIcon,
      },
      {
        name: 'esri',
        title: 'Esri ArcGIS API for JavaScript',
        icon: esriIcon,
      },
    ],
    text: "Map integration using Esri's ArcGIS API for JavaScript. Features include basemap selection, layer toggling, and map navigation controls.",
  },
  {
    title: 'POPULATION MODELING',
    name: 'predator_prey',
    ref: 'https://predator-prey-model.vercel.app/',
    git: 'https://github.com/khirshah/predator_prey',
    bg: popModelsImage,
    tools: [
      {
        name: 'react',
        title: 'ReactJS',
        icon: reactIcon,
      },
      {
        name: 'webpack',
        title: 'Webpack',
        icon: webpackIcon,
      },
      {
        name: 'nodejs',
        title: 'NodeJS',
        icon: nodeIcon,
      },
      {
        name: 'd3js',
        title: 'D3 JS',
        icon: d3Icon,
      },
    ],
    text: 'Interactive simulation of the Lotka-Voltera predator-prey model written in ReactJS and D3 JS.',
  },
  {
    title: 'COMPETITION MODEL',
    name: 'ca1',
    ref: 'http://khirshah.fractalometry.com/competition-model/',
    git: '',
    bg: competitionModelImage,
    tools: [
      {
        name: 'javascript',
        title: 'JavaScript',
        icon: javaScriptIcon,
      },
    ],
    text: 'Cellular automaton model of 2 competing species. Made with Vanilla JavaScript around 2013. The paramteres can be changed and the model behaviour changes accordingly. Default values ensure an almost equillibrium state of the model.',
  },
  {
    title: 'HOST-PARASITE MODEL',
    name: 'ca2',
    ref: 'http://khirshah.fractalometry.com/host-parasite-model/',
    git: '',
    bg: hostParasiteModelImage,
    tools: [
      {
        name: 'javascript',
        title: 'JavaScript',
        icon: javaScriptIcon,
      },
    ],
    text: 'Cellular automaton representation of a host-parasite model. I used this model and some alternatives for my PhD research. We built equivalent models in C++ without graphical representation to allow running them many times and statistically analyse the captured data. Related publication can be found on the About page of my website.',
  },
]

export default projectsData
