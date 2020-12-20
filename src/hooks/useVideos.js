import React, {useState, useEffect} from 'react';
import VideoApi from '../apis/VideoApi';

const useVideos =(defaultSearch)=>{

    const[videos, setVideos] =useState([]);



    useEffect(
        ()=>{
               search(defaultSearch);
           },[]

       );

    const search = async (term)=>{

        const response=  await   VideoApi.get(
                     '/search', {
                         params :{
                             q : term
                     }

                     }
                    

             );

             setVideos(response.data.items);

      }


      return [videos, search];
}


export default useVideos;