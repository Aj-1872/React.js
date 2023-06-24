import React from 'react';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import './App.css';

function App() {
  return (
    <div>
      <Navbar title="TextUtiles" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" />
      </div>
      <div className="container">
        <About />
      </div>
    </div>
  );
}

export default App;
