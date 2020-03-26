import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.scss';
import Navbar from './components/navbar';
import Login from './pages/Login';
/* import Footer from './components/footer'; */


export default function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

function updateLogin(){
  setIsLoggedIn(true);
      console.log('isLoggedIn should be true = ', isLoggedIn)
  }

function logoutUser(){
  setIsLoggedIn(false);
    localStorage.clear();
    console.log('isLoggedIn should be false = ', isLoggedIn)
  }

    return (localStorage.getItem('username') !== null && isLoggedIn === true) ?
    ( 
      <div className='App'>
        <Navbar />   
        <button className='btn btn-primary fixed-top btn-logout' onClick={logoutUser}>
        <Link to={'/'}>Log out</Link> 
        </button>
          {props.children}
         {/*  <Footer /> */}
      </div>
    ) : (
      <Login updateLoginStatus={updateLogin} />
    )
  }


