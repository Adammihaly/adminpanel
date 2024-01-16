import './nav.css';
import Home from './Home';
import Posts from './Posts';
import {Link, NavLink, Route, Routes} from 'react-router-dom';

function Nav () 
{
  return (
    <>
    <div className='grid'>
      <div className='links'>
        <NavLink to='/' className={({ isActive, isPending }) => isPending ? "link" : isActive ? "link active" : "link"}>Home</NavLink>
        <NavLink to='/posts' className={({ isActive, isPending }) => isPending ? "link" : isActive ? "link active" : "link"}>Posts</NavLink>
        <NavLink to='/admin' className={({ isActive, isPending }) => isPending ? "link" : isActive ? "link active" : "link"}>Adminisztracio</NavLink>
        <NavLink to='/team' className={({ isActive, isPending }) => isPending ? "link" : isActive ? "link active" : "link"}>Team</NavLink>
      </div>
      <div className='right'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/posts' element={<Posts />} />
        </Routes>
      </div>
    </div>
    </>
  );
}

export default Nav;