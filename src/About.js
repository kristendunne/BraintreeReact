import React from 'react';
import ReactDOM from 'react-dom';
export default class About extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }