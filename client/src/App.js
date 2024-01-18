


// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './LoginSignup/LoginSignup';
 import Header from './LoginSignup/Header';
import About from './LoginSignup/About';

const App = () => {
  return (
    <>
        <Header/>
        {/* <Router> */}
         <Routes> 
        <Route path="/signup" element={<LoginSignup/>} />
        <Route path="/about" element={<About/>} />


          </Routes> 

        {/* </Router> */}

    </>

    // <Router>
    //   <Routes>
    //     <Route path="/" element="" />
    //     <Route path="/about" element="" />
    //     <Route path="/contact" element="" />
    //   </Routes>
    // </Router>
    
   
  );
};

/*
 return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
*/
export default App;



// function App() {
//   return (
//     <div>
//       <LoginSignup/>
      
//     </div>
//   );
// }

// export default App;
