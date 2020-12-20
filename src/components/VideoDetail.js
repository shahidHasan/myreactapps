import React from 'react';




const VideoDetail =({video})=>{
    const divRef=React.createRef();


    if(video!=null){
        const videourl="https://www.youtube.com/embed/"+video.id.videoId;
        return (
            <div >
                <div className="ui embed">
                             <iframe  title={video.snippet.title} src={videourl} ref={divRef}></iframe>
                </div>
                

                <div className="ui segment"> 
               <h4 className="ui header">{video.snippet.title}</h4> 
                <p>{video.snippet.description}</p>
            </div>

            </div>
            

        )
    }
    return <div>loading..</div>


}

export default VideoDetail;