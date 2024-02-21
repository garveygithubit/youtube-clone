import React from 'react'
import './video.css';
import PlayVideo from '../Component/Navbar/PlayVideo/PlayVideo';
import Recommended from '../Recommended/Recommended';
import { useParams } from 'react-router-dom';

const Video =()=> {

  const{categoryId,VideoId} = useParams();

  return (
    <div className='play-container'>
    <PlayVideo VideoId={VideoId}/>
    <Recommended categoryId/>
      
    </div>
  )
}

export default Video
