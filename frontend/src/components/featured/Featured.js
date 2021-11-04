import React, { useState , useEffect} from 'react';
import './Featured.scss';
import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import Banner from '../../assets/film_title_banner.jpg';
import FilmTitle from '../../assets/film_title.png';
import {
  FormControl,
  Box, 
  Button,
  Stack,
  Select, 
  MenuItem,
  OutlinedInput,
} from '@mui/material';
import axios from 'axios';

const names = [
  'Adventure',
  'Comedy',
  'Sci-Fi',
  'Crime',
  'Horror',
  'Romance',
  'Thriller',
];

const Placeholder = ({ children }) => {
  return <div style={{ color: '#aaa' }}>{children}</div>;
};

const Featured = ({ type }) => {
  const [genre, setGenre] = useState('');
  const [content, setContent] = useState({});

  useEffect(() => {
   const getRadomContent = async () => {
     try {
       const res = await axios.get(`/movie/random?type=${type}`, {
        headers: {
          token:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2ZjZGQwNzEzZjQ3MDQzMmIwMTY4MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTgzMzI3NCwiZXhwIjoxNjM2MjY1Mjc0fQ.Ilu6bO4_7cm4IlHUFq-N_Y5yU37g-Clxi3Ptp5B-UYA',
        },
       })
       setContent(res.data[0]);
     } catch (error) {
       console.log(error)
     }
   }
   getRadomContent();
  }, [type])

  const handleChange = (event) => {
    setGenre(event.target.value);
  };

  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span>{type === 'movies' ? 'Movies' : 'TV Series'}</span>
          <Box sx={{ minWidth: 120, marginLeft: '12px' }}>
            <FormControl fullWidth>
              <Select
                displayEmpty
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={genre}
                onChange={handleChange}            
                input={<OutlinedInput />}
                renderValue={
                  genre !== ''
                    ? undefined
                    : () => <Placeholder>Select Genre</Placeholder>
                }
                sx={{
                  backgroundColor: '#FFFF',
                  height: 40,
                }}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
      )}
      <img width='100%' src={content.image} alt='profile' />
      <div className='details'>
        <img src={content.imageTitle} alt='title' />
        <span className='desc'>
          {content.description}
        </span>
        <Stack direction='row' spacing={2}>
          <Button
            variant='inherit'
            startIcon={<PlayArrow />}
            sx={{
              backgroundColor: '#FFFF',
              color: 'black',
              '&.MuiButtonBase-root:hover': {
                backgroundColor: '#FFFF',
              },
            }}
          >
            Play
          </Button>
          <Button
            variant='contained'
            startIcon={<InfoOutlined />}
            sx={{
              backgroundColor: '#E50914',
              '&.MuiButtonBase-root:hover': {
                backgroundColor: '#E50914',
              },
            }}
          >
            Info
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Featured;
