import React, { Fragment } from 'react';
import {
  Typography,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const WidgetLarge = () => {
  const Status = ({ type }) => {
    if (type === 'Approved') {
      return (
        <Button size='small' variant='outlined' color='info'>
          {type}
        </Button>
      );
    } else if (type === 'Pending') {
      return (
        <Button size='small' variant='outlined' color='warning'>
          {type}
        </Button>
      );
    } else {
      return (
        <Button size='small' variant='outlined' color='error'>
          {type}
        </Button>
      );
    }
  };

  return (
    <Fragment>
      <Item>
        <Typography sx={{ fontSize: 15 }} color='text.secondary' gutterBottom>
          Latest Transactions
        </Typography>
        <TableContainer>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Customer</TableCell>
                <TableCell align='right'>Date</TableCell>
                <TableCell align='right'>Amount</TableCell>
                <TableCell align='right'>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                  >
                    <Avatar
                      alt='avatar'
                      src='https://mui.com/static/images/avatar/1.jpg'
                    />

                    <Typography
                      sx={{
                        marginTop: '6px',
                        marginLeft: '8px',
                      }}
                      variant='body2'
                      color='text.primary'
                    >
                      Remy Sharp
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align='right'>2021-12-02</TableCell>
                <TableCell align='right'>$ 258.00</TableCell>
                <TableCell align='right'>
                  <Status type='Approved' />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                  >
                    <Avatar
                      alt='avatar'
                      src='https://mui.com/static/images/avatar/3.jpg'
                    />

                    <Typography
                      sx={{
                        marginTop: '6px',
                        marginLeft: '8px',
                      }}
                      variant='body2'
                      color='text.primary'
                    >
                      Cindy Baker
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align='right'>2021-05-21</TableCell>
                <TableCell align='right'>$ 128.00</TableCell>
                <TableCell align='right'>
                  <Status type='Pending' />
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                  >
                    <Avatar
                      alt='avatar'
                      src='https://mui.com/static/images/avatar/3.jpg'
                    />

                    <Typography
                      sx={{
                        marginTop: '6px',
                        marginLeft: '8px',
                      }}
                      variant='body2'
                      color='text.primary'
                    >
                      Cindy Baker
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align='right'>2021-03-27</TableCell>
                <TableCell align='right'>$ 300.00</TableCell>
                <TableCell align='right'>
                  <Status type='Decline' />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Item>
    </Fragment>
  );
};

export default WidgetLarge;
