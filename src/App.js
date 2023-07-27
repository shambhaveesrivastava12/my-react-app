
import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

// import About from './Components/About';
function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert]= useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  setTimeout(() => {
    setAlert(null);
  }, 2000);
  }
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#161616'
      showAlert("Dark mode enabled", "success");
    }
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled", "success");
    }
  }
  return (
   <>
   <Navbar title="MyApp" aboutText="About Us" mode = {mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container">
   <TextForm showAlert={showAlert} heading='Enter text you want to analyze' mode={mode}/>
   {/* <About/> */}
   </div>
   </>
  );
}

export default App;
