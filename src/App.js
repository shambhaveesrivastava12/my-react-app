
import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
      // document.title='My App - Dark Mode'
    }
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled", "success");
      // document.title='My App - Light Mode'
    }
  }
  // const toggleMode2 = ()=>{
  //   if(mode === 'light'){
  //     setMode('pink')
  //     document.body.style.backgroundColor = '#dd0a9f'
  //     showAlert("Pink mode enabled", "success");
  //   }
  //   if(mode === 'pink'){
  //     setMode('light')
  //     document.body.style.backgroundColor = 'white'
  //     showAlert("Light mode enabled", "success");
  //   }
  // }
  // const toggleMode3 = ()=>{
  //   if(mode === 'light'){
  //     setMode('green')
  //     document.body.style.backgroundColor = '#0de658'
  //     showAlert("Green mode enabled", "success");
  //   }
  //   if(mode === 'green'){
  //     setMode('light')
  //     document.body.style.backgroundColor = 'white'
  //     showAlert("Light mode enabled", "success");
  //   }


  return (
   <>
   <Router>
   <Navbar title="MyApp" aboutText="About Us" mode = {mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <div className="container">
   <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading='Try Text Anthologist - word and character counter, removes extra spaces, case changer' mode={mode}/>
          </Route>
        </Switch>
   </div>
   </Router>
   </>
  );
}

export default App;
