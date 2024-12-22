import './App.css';
import Main from './Main';
import React from 'react';
import Home from './Home';
import Login from './Login';
import About from './About'
import Signup from './Signup';
import Product from './Product';
import Personal from './Personal';
import Winter from './Winter';
import Category from './Category'
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
// import Header from './Header';
// import Footer from './Footer';
import Blogs from './Blogs';


function App() {
  return (
    <>
    <Router>
      
        <Routes>
          <Route path="/"element={<Main/>}/>
          <Route path="/home"element={<Main/>}/>
          <Route path="/login"element={<Login/>}/>
          <Route path="/signup"element={<Signup />}/>
          <Route path="/about"element={<About />}/>
          <Route path="/product"element={<Product/>}/>
          <Route path="/Category"element={<Category/>}/>
          <Route path='/Blogs'element={<Blogs/>}/>
          <Route path='/Personal'element={<Personal/>}/>
          <Route path='/Winter'element={<Winter/>}/>
        </Routes>
       
        
    </Router>    
    
    </>
  );
}

export default App;
