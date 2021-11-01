import React from 'react';
import { ArrowBackOutlined } from '@mui/icons-material';
import Trailer from '../../assets/trailer.mp4';
import './Video.scss';

const Video = () => {
  return (
    <div className='watch'>
      <div className='back'>
          <ArrowBackOutlined />
          Home
      </div>
      <video className='video' autoPlay progress controls src={Trailer}/>
    </div>
  );
};

export default Video;
