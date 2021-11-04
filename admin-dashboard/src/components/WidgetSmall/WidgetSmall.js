import React, { Fragment, useState, useEffect } from 'react';
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const WidgetSmall = () => {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUser = async () => {
      try {
        const res = await axios.get('/users?new=true', {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2ZjZGQwNzEzZjQ3MDQzMmIwMTY4MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTkwNDQ1NCwiZXhwIjoxNjM2MzM2NDU0fQ.EadqVCMybKDkFdEe6Q78ZQrcNs2PTxWtaoQzwA3gdHs',
          },
        });
        setNewUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUser();
  }, []);

  return (
    <Fragment>
      <Item>
        <Typography sx={{ fontSize: 15 }} color='text.secondary' gutterBottom>
          New Users
        </Typography>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {newUsers.map((user) => (
            <Fragment>
              <ListItem
                alignItems='flex-start'
                secondaryAction={
                  <Button edge='end' variant='outlined' size='small'>
                    View
                  </Button>
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt='avatar'
                    src={user.avatar || 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png'}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={user.username}              
                />
              </ListItem>
              <Divider variant='inset' component='li' />
            </Fragment>
          ))}
        </List>
      </Item>
    </Fragment>
  );
};

export default WidgetSmall;
