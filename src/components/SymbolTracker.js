import React from 'react'
import "./styles/SymbolTracker.css"

export default class SymbolTracker extends React.Component {
  render () {
    return this.props.len < this.props.limit ? <span className="message">{`Осталось ${this.props.limit - this.props.len} символов из ${this.props.limit}`}</span> : this.props.len > this.props.limit ? <span className="message warning">Превышен лимит символов в поле</span> : null
  }
}