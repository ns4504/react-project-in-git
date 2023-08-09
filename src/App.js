import logo from './hamster.jpeg';
import './App.css';
import React, { Component } from "react";
import {
  Route, Routes,
  NavLink,
  HashRouter
} from "react-router-dom";

import Hay from "./Hay";
import Ball from "./Ball";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Look at this little fellow!
        </p>
      
      <HashRouter>
        <div>
          <h2>Learn About What He Likes</h2>
          <ul className="nav">
            <li><NavLink to="/Hay">Hay</NavLink></li>
            <li><NavLink to="/Ball">Ball</NavLink></li>
          </ul>
          <div className="content">
          <Routes>
            <Route path="/Hay" element={<Hay />}/>
            <Route path="/Ball" element={<Ball />}/>
          </Routes>
          </div>
        </div>
      </HashRouter>
      </header>
    </div>
  );
}

export default App;
