import React, { useState , useEffect} from 'react';
import './Featured.scss';
import { InfoOutlined, PlayArrow } from '@mui/icons-material';
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
  'Drama',

];

const Placeholder = ({ children }) => {
  return <div style={{ color: '#aaa' }}>{children}</div>;
};

const Featured = ({ type,  setGenre}) => {
  const [text, setText] = useState('');
  const [content, setContent] = useState({});

  useEffect(() => {
   const getRadomContent = async () => {
     try {
       const res = await axios.get(`/movie/random?type=${type}`, {
        headers: {
          token:
          "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
        },
       })
       setContent(res.data[0]);
     } catch (error) {
       console.log(error)
     }
   }
   getRadomContent();
  }, [type])

  const handleChange = (e) => {
    setText(e.target.value);
    setGenre(e.target.value)
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
                value={text}
                onChange={handleChange}            
                input={<OutlinedInput />}
                renderValue={
                  text !== ''
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
        <img src={content.imgTitle} alt='title' />
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
