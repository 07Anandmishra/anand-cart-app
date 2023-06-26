
import './App.css';
import {Routes,Route} from 'react-router-dom'
import About from './Components/About';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import Index from './Components/Index';
import SingleProduct from './Components/SingleProduct';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import { useState,useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

function App() {
const [loading, setLoading]=useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
     setLoading(false)
    },5000)
  },[])

  return (
  
  <div >
    {
      loading ? 
      <span className='spinners'> 
      <ClipLoader
      
        color={'#123abc'}
        loading={loading}
        size={100}
          />
          </span>
      :
      <>
      <Navbar />

    <Routes>

    <Route path='/' element={<Index />}/>
     <Route path='/about' element={<About />}/>
     <Route path='/contact' element={<Contact />}/>
     <Route path='/cart' element={<Cart />}/>
     <Route path='/singleproduct/:id' element={<SingleProduct />}/>
    </Routes>
    <Footer />
    </>
    }
   
    
    </div>
  );
}

export default App;
