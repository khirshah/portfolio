import React, { Component } from 'react';
import styles from "../styles/projectsMenu.css"

export default class Menu extends Component {
    render() {
        return (
          <div className={styles.projectsMenu}>
            <ul>
                <li><a href="https://agi-react-calculator.herokuapp.com/">Calculator</a></li>
                <li><a href="http://khirshah.fractalometry.com/host-parasite-model/">Cellular automaton 1</a></li>
                <li><a href="http://khirshah.fractalometry.com/competition-model/">Cellular automaton 2</a></li>
                <li><a href="https://agi-weather-app.herokuapp.com/">Weather app</a></li>
                <li><a href="https://agi-ebay-query.herokuapp.com/">Ebay search</a></li>
                <li><a href="https://fract-acc-app-demo.herokuapp.com/">Accounting app</a></li>
            </ul>
          </div>
        );
    }
}