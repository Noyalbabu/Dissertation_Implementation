import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import NavPage from './elements/navPage';
import Game1Q from './elements/game1Question';
function App() {
  return (
    <div className='App'>
        <BrowserRouter>
        <NavPage/>
          <Routes>
            <Route path = '/' />
            <Route path = '/game1Question' element = {<Game1Q/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
