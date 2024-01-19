


// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './LoginSignup/LoginSignup';
 import Header from './LoginSignup/Header';
import About from './LoginSignup/About';
import LandingPage from'./LoginSignup/LandingPage';
import ImageConverter from'./LoginSignup/TetToImage';
import { useLocation} from 'react-router-dom';
import './App.css';

const App = () => {
  let location=useLocation();
  return (

    location.pathname=="/success" ?<div><ImageConverter/></div>:
    <>
        <Header/>
         <Routes> 
        <Route path="/signup"  element={<LoginSignup/>} />
        <Route path="/login"  element={<LoginSignup/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<LandingPage/>} />
        </Routes> 


    </>

   
  );
};


export default App;



