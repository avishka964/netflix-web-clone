import React, { Fragment } from 'react';
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Grid,
  Paper,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { useLocation } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const List = () => {
  const location = useLocation();
  const list = location.list;

  console.log(list);

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
          {'Edit'}
        </Box>
      </div>
      <Grid container spacing={2} style={{ marginTop: '10px' }}>
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
                          value={list.title}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3}>
                        <TextField
                          label='Genre'
                          variant='outlined'
                          fullWidth
                          name='genre'
                          value={list.genre}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={3}>
                        <TextField
                          label='Type'
                          variant='outlined'
                          fullWidth
                          name='type'
                          value={list.type}
                        />
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

export default List;
