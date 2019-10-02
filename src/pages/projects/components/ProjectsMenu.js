import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        return (
            <ul>
                <li><a href="https://agi-react-calculator.herokuapp.com/">Calculator</a></li>
                <li><a href="http://khirshah.fractalometry.com/host-parasite-model/">Cellular automaton 1</a></li>
                <li><a href="http://khirshah.fractalometry.com/competition-model/">Cellular automaton 2</a></li>
                <li><a href="https://agi-weather-app.herokuapp.com/">Weather app</a></li>
                <li><a href="https://agi-ebay-query.herokuapp.com/">Ebay search</a></li>
                <li><a href="https://fract-acc-app-demo.herokuapp.com/">Accounting app</a></li>
            </ul>
        );
    }
}