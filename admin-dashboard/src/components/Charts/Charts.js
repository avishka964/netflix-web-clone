import React, { Fragment } from 'react';
import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const Charts = ({ title, data, dataKey, grid }) => {
  return (
    <Fragment>
      <Item>
        <Typography sx={{ fontSize: 20 }} color='text.secondary' gutterBottom>
          {title}
        </Typography>
        <ResponsiveContainer width='100%' aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey='name' stroke='#5550BD' />
            <Line type='monotone' dataKey={dataKey} stroke='#5C7AEA' />
            <Tooltip />
            {grid && <CartesianGrid strokeDasharray='3 3' />}
          </LineChart>
        </ResponsiveContainer>
      </Item>
    </Fragment>
  );
};

export default Charts;
