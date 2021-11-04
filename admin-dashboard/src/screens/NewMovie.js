import React, { Fragment, useContext, useState } from 'react';

import {
  Button,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import storage from '../firebase';
import {createMovie} from '../context/movieContext/APICalls';
import {MovieContext} from '../context/movieContext/MovieContext';
import { useHistory } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const NewMovie = () => {
  const history = useHistory()
  const [movie, setMovie] = useState(null);
  const [image, setImage] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgThumb, setImgThumb] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const {dispatch} = useContext(MovieContext);

  const handleChange = (e) => {
    const values = e.target.value;
    setMovie({ ...movie, [e.target.name]: values });
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };


  const  handleUpload = (e) => {
    e.preventDefault()
    upload([
      {file: image, label: 'image'},
      {file: imgTitle, label: 'imgTitle'},
      {file: imgThumb, label: 'imgThumb'},
      {file: trailer, label: 'trailer'},
      {file: video, label: 'video'},
    ])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createMovie(movie, dispatch)
    history.push('/movies')
  }

  return (
    <Fragment>
      <div style={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            p: 1,
            bgcolor: 'background.paper',
            fontSize: '1.5rem',
            fontWeight: 'bold',
          }}
        >
          {'Add New One'}
        </Box>
      </div>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Item>
          <Grid container justify='center' spacing={1}>
            <Grid item md={12}>
              <form>
                <CardContent>
                  <Grid item container spacing={1} justify='center'>
                    <Grid item xs={12} sm={6} md={3}>
                      <TextField
                        label='Movie Name'
                        variant='outlined'
                        fullWidth
                        name='title'
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <TextField
                        label='Year'
                        variant='outlined'
                        fullWidth
                        type='number'
                        name='year'
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <TextField
                        label='Age Limit'
                        variant='outlined'
                        fullWidth
                        type='number'
                        name='limit'
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <TextField
                        label='Genre'
                        variant='outlined'
                        fullWidth
                        name='genre'
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <FormControl fullWidth>
                        <InputLabel id='demo-simple-select-label'>
                          Is Series
                        </InputLabel>
                        <Select
                          label='Is Series'
                          onChange={handleChange}
                          name='isSeries'
                          defaultValue={'true'}
                        >
                          <MenuItem value={'true'}>Yes</MenuItem>
                          <MenuItem value={'false'}>No</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <TextField
                        label='Description'
                        variant='outlined'
                        fullWidth
                        onChange={handleChange}
                        multiline
                        name='description'
                      />
                    </Grid>
                    
                    <Grid item xs={12} sm={6} md={4} style={{marginTop:'10px'}}>
                      <label htmlFor='image' style={{color:'blue'}}>Banner Image: </label>
                      <input
                        type='file'
                        id='image'
                        name='image'
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{marginTop:'10px'}}>
                      <label htmlFor='image' style={{color:'blue'}}>Image Title: </label>
                      <input
                        type='file'
                        id='imgTitle'
                        name='imgTitle'
                        onChange={(e) => setImgTitle(e.target.files[0])}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{marginTop:'10px'}}>
                      <label htmlFor='image' style={{color:'blue'}}>Thumbnail: </label>
                      <input
                        type='file'
                        id='imgThumb'
                        name='imgThumb'
                        onChange={(e) => setImgThumb(e.target.files[0])}
                      />
                    </Grid>
                   
                    <Grid item xs={12} sm={6} md={4}>
                      <label htmlFor='image' style={{color:'red'}}>Trailer: </label>
                      <input
                        type='file'
                        id='trailer'
                        name='trailer'
                        accept='video/*'
                        onChange={(e) => setTrailer(e.target.files[0])}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <label htmlFor='image' style={{color:'red'}}>Video: </label>
                      <input
                        type='file'
                        id='video'
                        name='video'
                        accept='video/*'
                        onChange={(e) => setVideo(e.target.files[0])}
                      />
                    </Grid>
                  
                  </Grid>
                </CardContent>
                {uploaded === 5 ? (
                  <CardActions>
                    <Button variant='contained' color='primary' type='Submit' onClick={handleSubmit}>
                      Create
                    </Button>
                  </CardActions>
                ) : (
                  <CardActions>
                    <Button variant='contained' color='primary' type='Submit' onClick={handleUpload}>
                      Upload
                    </Button>
                  </CardActions>
                )}
              </form>
            </Grid>
          </Grid>
        </Item>
      </Grid>
    </Fragment>
  );
};

export default NewMovie;
