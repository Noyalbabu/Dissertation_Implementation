import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import PlayGame from './elements/game';
import About from './elements/about';
import NavPage from './elements/navPage';
function App() {
  return (
    <div className='App'>
        <NavPage/>
    </div>
  );
}

export default App;
