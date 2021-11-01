import React, { useState } from 'react';
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

  const handleChange = (event) => {
    setGenre(event.target.value);
  };

  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span>{type === 'movie' ? 'Movies' : 'TV Series'}</span>
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
      <img width='100%' src={Banner} alt='profile' />
      <div className='details'>
        <img src={FilmTitle} alt='title' />
        <span className='desc'>
          Consequat do cupidatat eiusmod ipsum nostrud consequat esse laborum
          reprehenderit elit fugiat labore et nulla. Enim officia non in aliqua
          enim in dolore dolor aute cillum sit. Ullamco sint adipisicing ipsum
          dolore consequat reprehenderit est dolor in et ad amet. Sint amet id
          ea veniam mollit. Aute consectetur ullamco quis magna ad tempor
          proident exercitation irure.
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
