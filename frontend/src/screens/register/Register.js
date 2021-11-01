import React, { useRef, useState } from 'react';
import './Register.scss';
import NetflixLogo from '../../assets/netflix_logo.png';
import { Button, TextField } from '@mui/material';
import { ArrowForwardIosOutlined } from '@mui/icons-material';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const emailRef = useRef();
  const passwordRef = useRef();


  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinished = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className='register'>
      <div className='top'>        
        <div className='wrapper'>
          <img src={NetflixLogo} alt='logo' className='logo' />
          <Button
            variant='contained'
            sx={{
              backgroundColor: '#E50914',
              '&.MuiButtonBase-root:hover': {
                backgroundColor: '#E50914',
              },
            }}
          >
            Sign In
          </Button>
        </div>
      </div>
      <div className='container'>
        <h1>Unlimited movies, Tv shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>        
        {!email ? (
          <div className='input'>
            <TextField
              inputRef={emailRef}
              className='textField'
              type='email'
              label='Email Address'
              variant='filled'
              sx={{
                backgroundColor: '#FFFF',
                borderRadius: '5px',
              }}
            />
            <Button
              endIcon={<ArrowForwardIosOutlined />}
              variant='contained'
              className='stBtn'
              sx={{
                backgroundColor: '#E50914',
                height: '100%',
                '&.MuiButtonBase-root:hover': {
                  backgroundColor: '#E50914',
                },
              }}
              onClick={handleStart}
            >
              Get Started
            </Button>
          </div>
        ) : (
          <form className='input'>
            <TextField            
              inputRef={passwordRef}
              className='textField'
              type='password'
              label='Password'
              variant='filled'
              sx={{
                backgroundColor: '#FFFF',
                borderRadius: '5px',
              }}
            />
            <Button            
              variant='contained'
              className='stBtn'
              sx={{
                backgroundColor: '#E50914',
                height: '100%',
                '&.MuiButtonBase-root:hover': {
                  backgroundColor: '#E50914',
                },
              }}
              onClick={handleFinished}
            >
              Finished
            </Button>
          </form >
        )}
      </div>
    </div>
  );
};

export default Register;
