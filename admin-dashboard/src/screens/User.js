import React, { Fragment } from 'react';
import {
  Avatar,
  Box,
  Button,
  CardActions,
  CardContent,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  CalendarToday,
  Email,
  LocationOn,
  Person,
  PhoneAndroid,
  PhotoCamera,
} from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const Input = styled('input')({
  display: 'none',
});

const User = () => {
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
          {'Edit User'}
        </Box>
      </div>
      <Grid container spacing={2} style={{ marginTop: '10px' }}>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Item>
            <List sx={{ width: '100%' }}>
              <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                  <Avatar
                    alt='Remy Sharp'
                    src='https://mui.com/static/images/avatar/1.jpg'
                  />
                </ListItemAvatar>
                <ListItemText
                  primary='Remy Sharp'
                  secondary={
                    <Typography
                      sx={{ display: 'inline' }}
                      component='span'
                      variant='body2'
                      color='text.primary'
                    >
                      Software Engineer
                    </Typography>
                  }
                />
              </ListItem>
              <Divider variant='inset' component='li' />
            </List>
            <Typography
              component='div'
              variant='subtitle1'
              color='text.primary'
              sx={{ padding: '0px 15px' }}
            >
              Account Details
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary='remy-sharp' />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CalendarToday />
                </ListItemIcon>
                <ListItemText primary='12-05-1996' />
              </ListItem>
            </List>
            <Typography
              component='div'
              variant='subtitle1'
              color='text.primary'
              sx={{ padding: '0px 15px' }}
            >
              Contact Details
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <PhoneAndroid />
                </ListItemIcon>
                <ListItemText primary='+94 715892586' />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Email />
                </ListItemIcon>
                <ListItemText primary='remy@gmail.com' />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOn />
                </ListItemIcon>
                <ListItemText primary='Australia' />
              </ListItem>
            </List>
          </Item>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={8}>
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
                      <Grid item xs={12} sm={12} md={6}>
                        <img
                           style={{ height: '100px', width:'100px', objectFit:'cover'}}
                          src='https://mui.com/static/images/avatar/1.jpg'
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

export default User;
