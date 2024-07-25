import React from 'react';
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./Components/pages/Home.js";
import Contact from './Components/pages/Contact.js';
import About from './Components/pages/About.js';

const Routers = () => {

     return (

<Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contactus' element={<Contact/>} />
</Routes> )
}

export default Routers