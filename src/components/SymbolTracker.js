import React from 'react'
import "./styles/SymbolTracker.css"

export const SymbolTracker = ({len, limit}) => {
  return (len < limit) 
  ? <span className="message">
    {`Осталось ${limit - len} символов из ${limit}`}
    </span> 
  : (len > limit) 
  ? <span className="message warning">
    Превышен лимит символов в поле
    </span> 
  : null
}