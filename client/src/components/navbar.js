import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-a' to='/'>{'Homepage'}</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-a' to='/contact/'>{'Contact'}</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-a' to='/about/'>{'About'}</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar; 