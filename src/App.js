import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import Alert from './component/Alert';
import './App.css';

export default function App() {
  const [mode, setMode] = useState('light');
  const [reverseMode, setReverseMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setReverseMode('light');
      document.body.style.backgroundColor = '#212529';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      setReverseMode('dark');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode} revMode={reverseMode} />
        <Alert alert={alert} revMode={reverseMode} />

        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} revMode={reverseMode} />} />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>

  );
}
