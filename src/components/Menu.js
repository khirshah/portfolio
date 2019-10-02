import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        return (
          <div>
            <div><a href="/">Home</a></div>
            <div><a href="/projects/">Projects</a></div>          
            <div><a href="/about/">About</a></div>
          </div>
        );
    }
}