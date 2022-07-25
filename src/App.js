import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home'
import Services from './Components/Pages/Services';
import Product from './Components/Gallery/Gallery';
import SignUp from './Components/Pages/SignUp';
import {useState, useEffect} from 'react'
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
setLoading(false)
    },1000)
  }, [])

  return (
    <>
    
  {loading?
   <ClipLoader className='loader' color={'#FFFFFF'} loading={loading}  size={150} />  
   :
   <Router>
   <Navbar />
        <Switch>
        <Route path="/" exact component={Home}></Route>
          <Route path='/services' component={Services} />
          <Route path='/products' component={Product} />
          <Route path='/sign-up' component={SignUp} />
    
        </Switch>
        </Router>
}

    </>



  );

  
}

export default App;