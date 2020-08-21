import React from 'react';
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Navigation";
import Profile from "./components/Profile";


const App = () => {
  return (
      <div className="app-wrapper">
          <Header/>
          <div className="site-container container">
              <Nav/>
              <Profile/>
          </div>
      </div>
  );
}


export default App;
