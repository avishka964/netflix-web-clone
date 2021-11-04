import React, {useContext, useState} from 'react';
import './Login.scss';
import NetflixLogo from '../../assets/netflix_logo.png';
import { Button, TextField } from '@mui/material';
import {login} from '../../context/authContext/APICalls'
import {AuthContext} from '../../context/authContext/AuthContext';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  
  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className='login'>
      <div className='top'>
        <div className='wrapper'>
          <img src={NetflixLogo} alt='logo' className='logo' />
        </div>
      </div>
      <div className='container'>
        <form autoComplete='off'>
          <h1>Sign In</h1>
          <TextField
            className='textField'
            type='email'
            label='Email or Phone Number'
            variant='filled'
            size='small'
            sx={{
              backgroundColor: '#333',
              borderRadius: '5px',
              '& .MuiInputBase-input': {
                color: '#FFFF',
                backgroundColor: '#333',
              },
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className='textField'
            type='password'
            label='Password'
            variant='filled'
            size='small'
            sx={{
              backgroundColor: '#333',
              borderRadius: '5px',
              '& .MuiInputBase-input': {
                color: '#FFFF',
              },
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant='contained'
            className='stBtn'
            sx={{
              backgroundColor: '#E50914',
              height: '50px',
              '&.MuiButtonBase-root:hover': {
                backgroundColor: '#E50914',
              },
            }}
            onClick={handleLogin}
          >
            Sign In
          </Button>
          <span>
            New to Netflix? <b>Sign up now</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <a href='/'>Learn more.</a>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
