import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import NavPage from './elements/navPage';
function App() {
  return (
    <div className='App'>
        <BrowserRouter>
        <NavPage/>
          <Routes>
            <Route path = '/' />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
