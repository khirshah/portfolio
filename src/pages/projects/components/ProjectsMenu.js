import React, { useState, Component } from 'react';
import styles from "../styles/projectsMenu.css";

export default class Menu extends Component {
    render() {
        return (
          <div className={styles.projectsMenu}>
                
                <a href="https://agi-weather-app.herokuapp.com/"><div>Weather app</div></a>
                <a href="https://agi-ebay-query.herokuapp.com/"><div>Ebay search</div></a>
                <a href="https://fract-acc-app-demo.herokuapp.com/"><div>Accounting app</div></a> 
                <a href="http://khirshah.fractalometry.com/competition-model/"><div>Cellular automaton 2</div></a>
                <a href="http://khirshah.fractalometry.com/host-parasite-model/"><div>Cellular automaton 1</div></a>
                <a href="https://agi-react-calculator.herokuapp.com/"><div>Calculator</div></a>

          </div>
        );
    }
}