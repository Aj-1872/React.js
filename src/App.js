import React, { useState } from 'react';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
// import About from './component/About';
import './App.css';
import Alert from './component/Alert';

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

  const [alert, setAlert] = useState(null);

   const showAlert = (message,type)=>{


    setAlert ({
      message : message,
      type : type

    })



  }

  return (
    <div>
      <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode} revMode={reverseMode} />
      <Alert alert="this is alert" />
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
