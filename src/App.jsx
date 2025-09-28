
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Index from './components/Index'
import Button from './components/Button'
import Navbar from './components/Navbar'
import Formulas from './components/Formulas'
import Main from './components/Main'
import Wait from './components/Wait'


function App() {


  return (
    <>
      <Router>
            <Navbar />

            <div className='container-router'>
              <Routes>
                  
                  {/* <Route index element={<Index />} /> */}
                  <Route path="/" element={<Index />} />
                  <Route path="/formulas" element={<Formulas />} />
                  <Route path="/knowledge" element={<Wait />} />
                  <Route path="/others" element={<Wait />} />
                  <Route path='*' element={<Navigate to='/' />} />   {/* Redirect unknown routes to home */}

              </Routes>
            </div>

      </Router>
    </>
  )
}

export default App


                        // <li><Link to="/">首頁</Link></li>
                        // <li><Link to="/formulas">函數</Link></li>
                        // <li><Link to="/knowledge">小知識</Link></li>
                        // <li><Link to="/others">其他功能</Link></li>   

