import React, { useState } from 'react';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
// import About from './component/About';
import './App.css';

function App() {
  const [mode, setMode] = useState('light'); // weather dark mode is enable or not.
  const [reverseMode, setReverseMode] = useState('dark'); 
  const toggleMode =()=>{


    if(mode === 'light'){
    setMode('dark');
    setReverseMode('light')
    document.body.style.backgroundColor = '#212529';
    }
    else{
      setMode('light');
      setReverseMode('dark');
    document.body.style.backgroundColor = 'white';

      
    }
  }

  return (
    <div>
      <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode} revMode={reverseMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode} revMode={reverseMode} />
      </div>
      <div className="container">
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
