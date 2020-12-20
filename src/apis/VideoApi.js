import React from 'react';
import axios from 'axios';

const KEY="AIzaSyC8TAFTifhGs2Z6990Y8NIfSBoCGpt4S7k";

  export default axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
                  part: 'snippet',
                  maxResults: 10,
                  type : 'video',
                  key: KEY
        }

  })