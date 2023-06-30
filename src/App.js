import React, { useState } from 'react';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
// import About from './component/About';
import './App.css';
import Alert from './component/Alert';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Navbar from './component/Navbar';

function App() {
  const [mode, setMode] = useState('light'); // weather dark mode is enable or not.
  const [reverseMode, setReverseMode] = useState('dark'); 
  const toggleMode =()=>{


    if(mode === 'light'){
    setMode('dark');
    setReverseMode('light')
    document.body.style.backgroundColor = '#212529';
    showAlert('Dark mode has been enabled','Success');
    }
    else{
      setMode('light');
      setReverseMode('dark');
    document.body.style.backgroundColor = 'white';
    showAlert('Light mode has been enabled','Success');


      
    }
  
  }

  const [alert, setAlert] = useState(null);

   const showAlert = (message,type)=>{


    setAlert ({
      msg : message,
      type : type

    })
    setTimeout(() => {
      setAlert(null,null);
    }, 2000);

  }

  return (
 
    <>
      <Navbar
        title="TextUtiles"
        mode={mode}
        toggleMode={toggleMode}
        revMode={reverseMode}
      />
      <Alert alert={alert} revMode={reverseMode} />

      <div className="container my-3">
        
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} revMode={reverseMode} />
          {/* {<About />}  */}
      
      </div>
    </>
  
  );
  //   <Router>
  //   <>
  //     <Navbar
  //       title="TextUtiles"
  //       mode={mode}
  //       toggleMode={toggleMode}
  //       revMode={reverseMode}
  //     />
  //     <Alert alert={alert} revMode={reverseMode} />

  //     <div className="container my-3">
  //       <Routes>
  //         <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} revMode={reverseMode} />} />
  //         <Route exact path="/about" element={<About />} />
  //       </Routes>
  //     </div>
  //   </>
  // </Router>
  // );
}

export default App;