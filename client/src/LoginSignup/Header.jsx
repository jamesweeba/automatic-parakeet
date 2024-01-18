// Header.js
import React from 'react';
import { Outlet,Link } from 'react-router-dom'; // If using React Router for navigation
// Assume you have a separate CSS file for header styling

const Header = () => {
    const projectDescription = "Transform and Morph Your Pictures with Pic Morpher";
  return (
    <header className='app-header'>
        <div  className='app-title'>
        <h1>Pic Morphy</h1>
        <p className='project-description'>{projectDescription}</p>
        </div>
      <nav>
        <ul className='nav-menu'>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li >
            <Link to='/signup'>Sign Up</Link>
          </li>
        </ul>
      </nav>
      {/* <Outlet /> */}
    </header>
  );
};

export default Header;
