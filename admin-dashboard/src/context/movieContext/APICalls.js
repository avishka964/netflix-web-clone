import axios from 'axios';
import {
  createMovieFailure,
  createMovieStart,
  createMovieSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMovieFailure,
  getMovieStart,
  getMovieSuccess,
} from './MovieActions';

export const getMovies = async (dispatch) => {
  dispatch(getMovieStart());
  try {
    const res = await axios.get('/movie', {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    });
    dispatch(getMovieSuccess(res.data));
  } catch (error) {
    dispatch(getMovieFailure());
  }
};

export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
     const res = await axios.post('/movie/', movie, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    });
    dispatch(createMovieSuccess(res.data));
  } catch (error) {
    dispatch(createMovieFailure());
  }
};

export const deleteMovies = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
     await axios.delete('/movie/'+id, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (error) {
    dispatch(deleteMovieFailure());
  }
};