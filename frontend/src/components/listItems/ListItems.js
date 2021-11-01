import React, { Fragment, useState } from 'react';
import './ListItems.scss';
import MoviePoster from '../../assets/movie_poster.jpg';
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from '@mui/icons-material';
import Trailer from '../../assets/trailer.mp4';

const ListItems = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='listItems'
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={MoviePoster} alt='preview' />
      {isHovered && (
        <Fragment>
          <video src={Trailer} autoPlay={true} loop />
          <div className='itemInfo'>
            <div className='icons'>
              <PlayArrow className='icon' />
              <Add className='icon' />
              <ThumbUpAltOutlined className='icon' />
              <ThumbDownAltOutlined className='icon' />
            </div>
            <div className='itemInfoTop'>
              <span>1 hour 14 mins</span>
              <span className='limit'>+16</span>
              <span>2020</span>
            </div>
            <div className='desc'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className='genre'>Thriller</div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default ListItems;
