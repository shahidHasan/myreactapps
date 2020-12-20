import React, { Component } from 'react';
import VideoItem from './VideoItem';


 const VideoList =({videos,onVideoSelection})=> {

   


      const videoList=  videos.map(
                (video)=>{

                        
                             return    <VideoItem  video={video} onVideoSelection={onVideoSelection}/>

                        
                }

        );



   

        return(
            <div className="ui relaxed divided list">
                   {videoList}

         </div>
        );
       
    
}

export default VideoList;