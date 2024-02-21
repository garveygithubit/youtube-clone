import React, { useEffect } from 'react';
import './PlayVideo.css';
import video1 from '../../../assets/video.mp4';
import like from '../../../assets/like.png';
import dislike from '../../../assets/dislike.png';
import share from '../../../assets/share.png';
import save from '../../../assets/save.png';
import jack from '../../../assets/jack.png';
import user_profile from '../../../assets/user_profile.jpg';
import { useState } from 'react';
import { API_KEY, value_converter } from '../../../data';
import moment from 'moment';


const PlayVideo = ({ VideoId }) => {
    const [apiData, setApiData] = useState(null);

    const[channelData, setChannelData] = useState(null);

    const[commentData, setCommentData] = useState([]);


    useEffect(() => {
        const fetchVideoData = async () => {
            try {
                const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${VideoId}&key=${API_KEY}`;
                const response = await fetch(videoDetails_url);
                const data = await response.json();
                if (data.items.length > 0) {
                    setApiData(data.items[0]);
                } else {
                    console.error('No video data found for the given VideoId:', VideoId);
                }
            } catch (error) {
                console.error('Error fetching video data:', error);
            }
        };
        const fetchOtherData = async () => {
            //fetching channel data
            const channelDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`; 
          await fetch(channelDetails_url).then(response => response.json()).then(data => setChannelData(data.items[0]));


          const comment_url =` https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${VideoId}&key=${API_KEY}`; 
          await fetch(comment_url).then(response => response.json()).then(data => setCommentData(data.items));


        }
        fetchVideoData();
    }, [VideoId]);

    useEffect(() => {
        if (apiData) {
            const fetchOtherData = async () => {
                //fetching channel data
                const channelDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`; 
              await fetch(channelDetails_url).then(response => response.json()).then(data => setChannelData(data.items[0]));
            }
            fetchOtherData();
        }
    }, [apiData]);

    
  return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe src={`https://www.youtube.com/embed/${VideoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:"Title here"}</h3>
      <div className="play-video-info">
        <p>{apiData?value_converter(apiData.statistics.viewCount):"17K"} views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
      <div>
      <span><img src={like} alt="" /> {apiData?value_converter(apiData.statistics.likeCount):15}</span>
      <span><img src={dislike} alt="" />1</span>
      <span><img src={share} alt="" />25</span>
      <span><img src={save} alt="" />5</span>
      </div>
</div>
<hr />
<div className="publisher">
    <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
<div>
<p>{apiData?apiData.snippet.channelTitle:""}</p>
<span>{channelData?value_converter(channelData.statistics.subscriberCount):'1M'} Subscribers</span>
    </div>
    <button>Subscribe</button>
    </div>
    <div className="vid-discription">
        <p>{apiData?apiData.snippet.description.slice(0,250):"Description Here"}</p>
        <p>I love Coding</p>
        <hr />
        <h4>{apiData?value_converter(apiData.statistics.commentCount):102} Comments</h4>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Emmanuel Garvey <span>1 day ago</span></h3>
                <p> A global computer network providing a variety of information and 
                    intercoonnected resources, a global computer network  using standardised communication protocols.</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                   

                </div>
            </div>
        </div>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Emmanuel Garvey <span>1 day ago</span></h3>
                <p> A global computer network providing a variety of information and 
                    intercoonnected resources, a global computer network  using standardised communication protocols.</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                   

                </div>
            </div>
        </div>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Emmanuel Garvey <span>1 day ago</span></h3>
                <p> A global computer network providing a variety of information and 
                    intercoonnected resources, a global computer network  using standardised communication protocols.</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                   

                </div>
            </div>
        </div>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Emmanuel Garvey <span>1 day ago</span></h3>
                <p> A global computer network providing a variety of information and 
                    intercoonnected resources, a global computer network  using standardised communication protocols.</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                   

                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PlayVideo
