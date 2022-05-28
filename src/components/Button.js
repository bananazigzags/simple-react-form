import React from 'react';
import "./styles/Button.css"

export default class Button extends React.Component {
  render() {
    return (
      <button 
      onClick={this.props.onClick}
      className="button"
      >
        {this.props.buttonName}
      </button>
    )
  }
}