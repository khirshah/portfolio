import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        return (
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="https://agi-react-calculator.herokuapp.com/">Calculator</a></li>
                <li><a href="http://khirshah.fractalometry.com/host-parasite-model/">Cellular automaton 1</a></li>
                <li><a href="http://khirshah.fractalometry.com/competition-model/">Cellular automaton 2</a></li>
                <li><a href="/contact/">Contact</a></li>
            </ul>
        );
    }
}