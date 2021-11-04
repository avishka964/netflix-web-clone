import React, { Fragment, useState } from 'react';
import { PhotoCamera } from '@mui/icons-material';
import {
  Button,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  TextField,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const Input = styled('input')({
  display: 'none',
});

const NewUser = () => {
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
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
          {'New User'}
        </Box>
      </div>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Item>
          <Grid container justify='center' spacing={1}>
            <Grid item md={12}>
              <form>
                <CardContent>
                  <Grid item container spacing={1} justify='center'>
                    <Grid item xs={12} sm={6} md={6}>
                      <TextField
                        label='User Name'
                        variant='outlined'
                        fullWidth
                        name='username'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <TextField
                        label='Full Name'
                        variant='outlined'
                        fullWidth
                        name='fullName'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <TextField
                        label='Email'
                        variant='outlined'
                        fullWidth
                        name='email'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <TextField
                        label='Phone'
                        variant='outlined'
                        fullWidth
                        name='phone'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <TextField
                        label='Country'
                        variant='outlined'
                        fullWidth
                        name='country'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <TextField
                        label='Password'
                        variant='outlined'
                        type='password'
                        fullWidth
                        name='password'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <FormControl fullWidth>
                        <InputLabel id='demo-simple-select-label'>
                          Status
                        </InputLabel>
                        <Select
                          value={status}
                          label='Status'
                          onChange={handleChange}
                        >
                          <MenuItem value={'active'}>Active</MenuItem>
                          <MenuItem value={'inactive'}>Inactive</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <img
                        style={{ width: '50px', height: '50px' }}
                        src='https://via.placeholder.com/150'
                        alt='avatar'
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
                    <Grid item xs={12} sm={6} md={6}>
                      <FormControl component='fieldset'>
                        <FormLabel component='legend'>Gender</FormLabel>
                        <RadioGroup row defaultValue='female' name='gender'>
                          <FormControlLabel
                            value='female'
                            control={<Radio />}
                            label='Female'
                          />
                          <FormControlLabel
                            value='male'
                            control={<Radio />}
                            label='Male'
                          />
                          <FormControlLabel
                            value='other'
                            control={<Radio />}
                            label='Other'
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions>
                  <Button variant='contained' color='primary' type='Submit'>
                    CREATE
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

export default NewUser;
