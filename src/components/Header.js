import React from 'react';
import "./styles/Header.css"

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>{this.props.formName}</h1>
      </div>
    )
  }
}