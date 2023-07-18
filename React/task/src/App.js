
import './App.css';
import { Route,Routes } from 'react-router-dom';
import React from "react";
import Login from './components/loginpage';
import Display from './components/display';
function App() {
  return (
    
    <>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/display' element={<Display/>} ></Route>
    </Routes>
    </>
  
  );
}

export default App;
