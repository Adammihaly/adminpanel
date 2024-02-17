import './nav.css';
import Home from './Home';
import Posts from './Posts';
import Admin from './Admin';
import {Link, NavLink, Route, Routes} from 'react-router-dom';
import React, { useState } from 'react';

function Nav () 
{

  const [showDiv, setShowDiv] = useState(false);

  const handleButtonClick = () => {
    setShowDiv(true);
  };

  const handleButtonClickClose = () => {
    setShowDiv(false);
  };

  return (
    <>
    <div className='grid'>
      <button onClick={handleButtonClick} className='mobile_menu'><i className="bi bi-list"></i></button>
      <button onClick={handleButtonClickClose} className='mobile_menu_close' style={{ display: showDiv ? 'block' : 'none' }}><i className="bi bi-x-circle"></i></button>
      
      <div className='links_mobile' style={{  display: showDiv ? 'block' : 'none' } }>
        <NavLink to='/' className={({ isActive, isPending }) => isPending ? "link" : isActive ? "link active" : "link"}>Kezdőlap</NavLink>
        <NavLink to='/posts' className={({ isActive, isPending }) => isPending ? "link" : isActive ? "link active" : "link"}>Posztok</NavLink>
        <NavLink to='/admin' className={({ isActive, isPending }) => isPending ? "link" : isActive ? "link active" : "link"}>Adminisztració</NavLink>
      </div>

      <div className='links'>
        <NavLink to='/' className={({ isActive, isPending }) => isPending ? "link" : isActive ? "link active" : "link"}>Kezdőlap</NavLink>
        <NavLink to='/posts' className={({ isActive, isPending }) => isPending ? "link" : isActive ? "link active" : "link"}>Posztok</NavLink>
        <NavLink to='/admin' className={({ isActive, isPending }) => isPending ? "link" : isActive ? "link active" : "link"}>Adminisztració</NavLink>
      </div>

      <div className='right'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </div>
    </div>
    </>
  );
}

export default Nav;