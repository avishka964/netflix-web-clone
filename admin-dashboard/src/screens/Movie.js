import React, { Fragment } from 'react';
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Paper,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { PhotoCamera } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const Input = styled('input')({
  display: 'none',
});

const Movie = () => {
  const location = useLocation();
  const movie = location.movie;

  console.log(movie);

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
          {'Edit'}
        </Box>
      </div>
      <Grid container spacing={2} style={{ marginTop: '10px' }}>
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
                          value={movie.title}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3}>
                        <TextField
                          label='Year'
                          variant='outlined'
                          fullWidth
                          name='year'
                          type='number'
                          value={movie.year}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3}>
                        <TextField
                          label='Age Limit'
                          variant='outlined'
                          fullWidth
                          name='limit'
                          type='number'
                          value={movie.limit}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3}>
                        <TextField
                          label='Genre'
                          variant='outlined'
                          fullWidth
                          name='genre'
                          value={movie.genre}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <TextField
                          label='Description'
                          variant='outlined'
                          multiline
                          fullWidth
                          name='description'
                          value={movie.description}
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} md={12}>
                        <img
                          style={{
                            height: '100px',
                            width: '100px',
                            objectFit: 'cover',
                          }}
                          src='https://images.pexels.com/photos/6791447/pexels-photo-6791447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                          alt='product'
                        />
                        <label htmlFor='icon-button-file'>
                          <Input
                            accept='image/*'
                            id='icon-button-file'
                            type='file'
                          />
                          <IconButton
                            color='primary'
                            aria-label='upload picture'
                            component='span'
                          >
                            <PhotoCamera />
                          </IconButton>
                        </label>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button variant='contained' color='primary' type='Submit'>
                      UPDATE
                    </Button>
                  </CardActions>
                </form>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Movie;
