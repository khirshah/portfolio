import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        return (
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/projects/project_1/project_1.html">Project</a></li>
                <li><a href="/contact.html">Contact</a></li>
            </ul>
        );
    }
}