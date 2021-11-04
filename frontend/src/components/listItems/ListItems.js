import React, { Fragment, useState, useEffect } from 'react';
import './ListItems.scss';
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from '@mui/icons-material';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ListItems = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});


  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get('/movie/find/' + item, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2ZjZGQwNzEzZjQ3MDQzMmIwMTY4MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTgzMzI3NCwiZXhwIjoxNjM2MjY1Mjc0fQ.Ilu6bO4_7cm4IlHUFq-N_Y5yU37g-Clxi3Ptp5B-UYA',
          },
        });
        setMovie(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [item]);

  return (
    <div
      className='listItems'
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie.image} alt='preview' />
      {isHovered && (
        <Fragment>
          <video src={movie.trailer} autoPlay={true} loop />
          <div className='itemInfo'>
            <div className='icons'>
              <Link to={{pathname:'/watch', movie: movie}}>
              <PlayArrow className='icon' />
              </Link>           
              <Add className='icon' />
              <ThumbUpAltOutlined className='icon' />
              <ThumbDownAltOutlined className='icon' />
            </div>
            <div className='itemInfoTop'>
              <span>{movie.title}</span>
              <span className='limit'>{movie.limit}+</span>
              <span>{movie.year}</span>
            </div>
            <div className='desc'>{movie.description}</div>
            <div className='genre'>{movie.genre}</div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default ListItems;
