
import './Home.css';
import Sidebar from '../Component1/Sidebar';
import Feed from '../page1/Feed';
import React, { useState } from 'react';

const Home =({sidebar}) => {

    const [category, setCategory] = React.useState(0);

  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
      <div className={`container ${sidebar?"": 'large-container'}`}>
        <Feed category={category}/>
       
      </div>
    </>
  )
}

export default Home
