import React from 'react'
import "./styles/ValidateError.css"

export default class ValidateError extends React.Component {
  render () {
    return !this.props.isValid ? <span class="error">{this.props.message}</span> : null
  }
}