import axios from 'axios';
import { createListFailure, createListStart, createListSuccess, deleteListsFailure, deleteListsStart, deleteListsSuccess, getListsFailure, getListsStart, getListsSuccess } from './ListActions';

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get('/list', {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (error) {
    dispatch(getListsFailure());
  }
};

export const creatList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
     const res = await axios.post('/list/', list, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    });
    dispatch(createListSuccess(res.data));
  } catch (error) {
    dispatch(createListFailure());
  }
};

export const deleteLists = async (id, dispatch) => {
  dispatch(deleteListsStart());
  try {
     await axios.delete('/list/'+id, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    });
    dispatch(deleteListsSuccess(id));
  } catch (error) {
    dispatch(deleteListsFailure());
  }
};