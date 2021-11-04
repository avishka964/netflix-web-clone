//FETCH MOVIE
export const getMovieStart = () => ({
  type: 'GET_MOVIE_START',
});

export const getMovieSuccess = (movies) => ({
  type: 'GET_MOVIE_SUCCESS',
  payload: movies,
});

export const getMovieFailure = () => ({
  type: 'GET_MOVIE_FAILURE',
});

//DELETE MOVIE
export const deleteMovieStart = () => ({
  type: 'DELETE_MOVIE_START',
});

export const deleteMovieSuccess = (id) => ({
  type: 'DELETE_MOVIE_SUCCESS',
  payload: id,
});

export const deleteMovieFailure = () => ({
  type: 'DELETE_MOVIE_FAILURE',
});

//UPLOAD MOVIE
export const createMovieStart = () => ({
  type: 'CREATE_MOVIE_START',
});

export const createMovieSuccess = (movie) => ({
  type: 'CREATE_MOVIE_SUCCESS',
  payload: movie,
});

export const createMovieFailure = () => ({
  type: 'CREATE_MOVIE_FAILURE',
});


//UPDATE MOVIE
export const updateMovieStart = () => ({
  type: 'UPDATE_MOVIE_START',
});

export const updateMovieSuccess = (movie) => ({
  type: 'UPDATE_MOVIE_SUCCESS',
  payload: movie,
});

export const updateMovieFailure = () => ({
  type: 'UPDATE_MOVIE_FAILURE',
});