
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';




function App() {
  const[mode,setMode]=useState("light");
  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
setAlert(null);
    },1500);
  }

const toggleMode=()=>{
  if(mode==="light"){
    setMode("dark");
    document.body.style.backgroundColor="#042743";
    showAlert("Dark mode has been enabled", "success")
    document.title="PlaywithText-Dark Mode";
  }
  else{
    setMode("light");
    document.body.style.backgroundColor="white";
    showAlert("Light mode has been enabled", "success")
    document.title="PlaywithText-Light Mode";
  }
}
  return (
   
    
    <> 
    
  
<Navbar title="PlaywithText" mode={mode} aboutText="About" toggleMode={toggleMode} />
{/* <Navbar /> */}
<Alert  alert={alert}/>

<div className="container my-3">
<TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode}/>
{/* <About/> */}
</div>



    </>

  );
}

export default App;
