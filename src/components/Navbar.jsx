import React from 'react'
import {useState} from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";
import Formulas from './Formulas';
import FormulaCards from './FormulaCards';
import Knowledge from './Knowledge';
import Wait from './Wait';
import Main from './Main';


const Navbar = () => {

    const [isToggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!isToggle);
    };

  return (

    <BrowserRouter> 

            <nav className="container-nav">
                <div className="nav-logo">
                    {/* <img src={logo} alt=""/> */}
                </div>

                <div className="nav-menu">
                    <ul>
                        {/* <a href=""><li>首頁</li></a>
                        <a href=""><li>函數</li></a>
                        <a href=""><li>小知識</li></a>
                        <a href=""><li>其他功能</li></a> */}

                        <li><Link to="/">首頁</Link></li>
                        <li><Link to="/formulas">函數</Link></li>
                        <li><Link to="/knowledge">小知識</Link></li>
                        <li><Link to="/others">其他功能</Link></li>
                        {/* <li><DropdownMeat /></li>
                        <li><DropdownVegetables/></li>
                        <li><DropdownRecipe/></li>
                        <li><Link to="/about">關於</Link></li> */}

                        
                        
                    </ul>
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
                                    {/* <li><Link to="/" onClick={handleToggle}>首頁</Link></li>
                                    <li><Link to="/map" onClick={handleToggle}>街巿地圖</Link></li>
                                    <li><Link to="/purchase" onClick={handleToggle}>時令蔬菜</Link></li>
                                    <li><Link to="/meat" onClick={handleToggle}>肉類介紹</Link></li>
                                    <li><Link to="/vegetables" onClick={handleToggle}>素類介紹</Link></li>
                                    <li><Link to="/recipe" onClick={handleToggle}>食譜簡介</Link></li>
                                    <li><Link to="/about" onClick={handleToggle}>關於</Link></li> */}
                    </ul>
                </div>

            </nav>

        <Routes>
            
            <Route path="/" element={<Main />} />
            <Route path="/formulas" element={<Formulas />} />
            <Route path="/knowledge" element={<Wait />} />
            <Route path="/others" element={<Wait />} />
            {/* <Route path="/" element={<Index />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/meat" element={<Meat />} />
            <Route path="/redmeat" element={<Redmeat />} />
            <Route path="/whitemeat" element={<Whitemeat />} />
            <Route path="/seafood" element={<Seafood />} />
            <Route path="/vegetables" element={<Vegetables />} />
            <Route path="/fruits" element={<Fruits />} />
            <Route path="/grains" element={<Grains />} />
            <Route path="/vegetable" element={<Vegetable />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipe" element={<Recipes />} />
            <Route path="/map" element={<Map />} />
            <Route path="/hotmeal" element={<HotMeal />} />
            <Route path="/coldmeal" element={<ColdMeal />} /> */}
            {/* <Route path="/coldmeal" element={<ColdMeal />} /> */}

            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* Add footer */}
            {/* <Footer /> */}
        </Routes>



    </BrowserRouter> 
  )
}

export default Navbar