import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import{ Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Video from './Pages/Video.jsx';
import { useState } from 'react';




const App = () =>{

  const [sidebar, setsidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar ={setsidebar}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>} />
        <Route path="/Video/:categoryId/:VideoId" element={<Video/>} />


      </Routes>
    </div>
  )
}


export default App
