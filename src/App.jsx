
import './App.css'
import MyNav from './Components/Navbar'
import {  Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MyCarousel from './Components/Carousel'

function App() {
 
  return (
    <>
      <ToastContainer />
      <MyNav />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      </Routes>
      
    </>
  )
}

export default App
