import React from 'react';
import './App.css';
import Form from './components/Form';
import { formData } from './formData';

function App() {
  return (
    <div className="form">
      <Form input={formData}/>      
    </div>
  );
}

export default App;
