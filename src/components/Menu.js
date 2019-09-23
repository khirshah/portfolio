import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        return (
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/projects/project_1/">Project</a></li>
                <li><a href="/contact/">Contact</a></li>
            </ul>
        );
    }
}