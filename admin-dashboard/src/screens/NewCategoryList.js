import React, {Fragment, useContext, useState, useEffect } from 'react';
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
import { useHistory } from 'react-router-dom';

import { getMovies } from '../context/movieContext/APICalls';
import { creatList } from '../context/listContext/APICalls'

import { ListsContext } from '../context/listContext/ListContext';
import { MovieContext } from '../context/movieContext/MovieContext';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const NewList = () => {
  const [list, setList] = useState(null);
  const history = useHistory()
  const { dispatch } = useContext(ListsContext);
  const { movies, dispatch: dispatchMovies } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovies);
  }, [dispatchMovies]);



  const handleChange = (e) => {
    const values = e.target.value;
    setList({ ...list, [e.target.name]: values });
  };

  const handleSelect = (e) => {
    let values  = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({...list, [e.target.name]: values})
    console.log(values)
  };

  console.log(list);

  const handleSubmit = (e) => { 
    e.preventDefault();
    creatList(list, dispatch)
    history.push('/lists')
  };

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
                        label='Title'
                        variant='outlined'
                        fullWidth
                        name='title'
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
                          Type
                        </InputLabel>
                        <Select
                          label='Type'
                          onChange={handleChange}
                          name='type'                        
                        >
                          <MenuItem value={'Movie'}>Movie</MenuItem>
                          <MenuItem value={'Series'}>Series</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <FormControl fullWidth>
                        <InputLabel shrink htmlFor='select-multiple-native'>
                          Content
                        </InputLabel>
                        <Select
                          multiple
                          native
                          label='Content'
                          onChange={handleSelect}
                          name='content'
                          inputProps={{
                            id: 'select-multiple-native',
                          }}
                        >
                          {movies.map((movie) => (
                            <option key={movie._id} value={movie._id}>
                              {movie.title}
                            </option>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </CardContent>

                <CardActions>
                  <Button
                    variant='contained'
                    color='primary'
                    type='Submit'
                    onClick={handleSubmit}
                  >
                    Create
                  </Button>
                </CardActions>
              </form>
            </Grid>
          </Grid>
        </Item>
      </Grid>
    </Fragment>
  );
};

export default NewList;
