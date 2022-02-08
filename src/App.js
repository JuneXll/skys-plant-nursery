import React from 'react';
// Styles
import './App.css';
// Sections
import Home from './components/sections/Home';
import About from './components/sections/About';
import Inventory from './components/sections/Inventory';
import Delivery from './components/sections/Delivery';
import Contact from './components/sections/Contact';
import Navigation from './components/Navigation';
// import NotFound from './components/sections/NotFound';

function App() {
  return (
    <div className="App">
      <Navigation/>
          <Home/>
          <About/>
          <Inventory/>
          <Delivery/>
          <Contact/>
    </div>
  );
}

export default App;
