import React from 'react';
import { render } from 'react-dom';
import bike from '../src/assets/bike1.jpg';
import logoW from '../src/assets/logo.png';
import './style.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 

import Home from './components/Home';
import Servis from './components/Servis';
import Kontakt from './components/Kontakt';

const App = () => {
  return( 
    <>
    <BrowserRouter> 
        
          <header>
              <nav>
                <Link to="/"> <li> HOME </li></Link>
                <Link to="/kola"> <li>  KOLA </li> </Link>
                <Link to="/servis"> <li> CYKLOSERVIS </li> </Link>
                <Link to="/kontakt"> <li> KONTAKT </li> </Link>
              </nav>
          </header>
          
          <main>
              <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/servis" element={<Servis/>} />
              <Route path="/kontakt" element={<Kontakt/>} />
              </Routes>
          </main>
        
      </BrowserRouter>
  </>
)};


render(<App />, document.querySelector('#app'));

/*
<div className="container">
        <header className="header">
          <ul>
            <li>HOME</li>
            <li>KOLA</li>
            <li>SERVIS</li>
            <li>KONTAKT</li>
          </ul>
        </header>
        <main className="mainPhoto">
          
        </main>
        <sidebar className="sidebarText">
          
        </sidebar>
        <footer>
         <p> BLAH </p> 
        </footer>
      </div> 

*/