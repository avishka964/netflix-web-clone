import React, {useState, useContext} from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,  
  TextField,
} from '@mui/material';
import {AuthContext} from '../context/authContext/AuthContext';
import { login } from '../context/authContext/APICalls';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {isFetching, dispatch} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()
        login({email, password}, dispatch)

    }

  return (
    <div className='login'>
      <Grid container justifyContent='center' alignItems='center'>
        <Grid item md={4}>
          <Card>
            <CardHeader title='LOG IN'></CardHeader>
            <form>
              <CardContent>
                <Grid item container spacing={1}>
                  <Grid item xs={12} sm={12} md={12}>
                    <TextField
                      label='Email Address'
                      variant='outlined'
                      fullWidth
                      name='email'
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <TextField
                      label='Password'
                      variant='outlined'
                      fullWidth
                      name='password'
                      type='password'
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button variant='contained' color='primary' type='Submit' onClick={handleLogin} disabled={isFetching}>
                 Log In
                </Button>
              </CardActions>
            </form>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
