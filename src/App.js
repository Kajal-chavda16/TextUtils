import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message,type) => {
      setAlert({
        msg : message ,
        type : type
      });
      setTimeout(() => {
        setAlert(null);
      },1500);
  };

  const removeBodyClasses = () => {
      document.body.classList.remove('bg-primary');
      document.body.classList.remove('bg-danger');
      document.body.classList.remove('bg-warning');
      document.body.classList.remove('bg-success');
      document.body.classList.remove('bg-light');
      document.body.classList.remove('bg-dark');
  };

  const changeColor = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
  };

const toggleMode = () => {
  // removeBodyClasses();
  // document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';
      showAlert("Dark mode has been set" , "success");
     
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been set" , "success");
    }
  };

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} changeColor={changeColor} />
      <Alert alert={alert} />
      <div className="container my-5" >
        <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={ <TextForm heading="Enter your text here to analyze" mode={mode} showAlert={showAlert} /> } />
        </Routes>  
      </div>
    </Router>
    </>
  );
}

export default App;
