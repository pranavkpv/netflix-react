import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Header from './components/Header/header';
import './App.css'
import Home from './Pages/home';
 


function App() {
  return (
     <div className="home">
      <Header/>
       <Home />
     </div>
  );
}

export default App;