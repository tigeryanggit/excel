import React from 'react'
import {useState} from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";
import Formulas from './Formulas';
import FormulaCards from './FormulaCards';
import Knowledge from './Knowledge';
import Wait from './Wait';



const Navbar = () => {

    const [isToggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!isToggle);
    };

  return (

    // <BrowserRouter> 

            <nav className="container-nav">
                <div className="nav-logo">


                </div>

                <div className="nav-menu">

                    <ul>
                        <li><Link to="/">首頁</Link></li>
                        <li><Link to="/formulas">函數</Link></li>
                        <li><Link to="/knowledge">小知識</Link></li>
                        {/* <li><Link to="/others">其他功能</Link></li> */}
                        <li><Link to="/about">關於</Link></li>                        
                    </ul>
                </div>
                
                <div className="nav-logo">


                </div>

                <div className="nav-burger">
                    <div className="mobile-menu-toggle" onClick={handleToggle}> 
                        <i className="fa-solid fa-bars fa-2x"></i>
                    </div>
                </div>

                <div className={
                    isToggle ? "mobile-list active":"mobile-list"
                } >
                    <ul>
                        <li><Link to="/" onClick={handleToggle}>首頁</Link></li>
                        <li><Link to="/formulas" onClick={handleToggle}>函數</Link></li>
                        <li><Link to="/knowledge" onClick={handleToggle}>小知識</Link></li>
                        {/* <li><Link to="/others" onClick={handleToggle}>其他功能</Link></li>   */}
                        <li><Link to="/about" onClick={handleToggle}>關於</Link></li>  
                    </ul>
                </div>

            </nav>


        // <Routes>

        //     <Route path="/" element={<Main />} />
        //     <Route path="/formulas" element={<Formulas />} />
        //     <Route path="/knowledge" element={<Wait />} />
        //     <Route path="/others" element={<Wait />} />

        // </Routes>

    // </BrowserRouter> 
    
  )
}

export default Navbar