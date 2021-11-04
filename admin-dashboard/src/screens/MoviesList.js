import React, { useContext, useState,useEffect } from 'react';
import {
  Avatar,
  Grid,
  Paper,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import { visuallyHidden } from '@mui/utils';
import { Link } from 'react-router-dom';
import {MovieContext} from '../context/movieContext/MovieContext'
import {deleteMovies, getMovies} from '../context/movieContext/APICalls';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'id',
    numeric: true,
    label: 'ID',
  },
  {
    id: 'title',
    label: 'Movie Name',
  },
  {
    id: 'imgThumb',
    label: 'Poster',
  },
  {
    id: 'genre',
    label: 'Genre',
  },
  {
    id: 'year',
    label: 'Year',
  },
  {
    id: 'isSeries',
    label: 'Category',
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align='left'
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell>Edit</TableCell>
        <TableCell>Delete</TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant='h6'
        id='tableTitle'
        component='div'
      >
        All Movies and Series
      </Typography> 
      <Link to='/new-movie' style={{textDecoration:'none'}}>
        <Button variant='contained' color='success'>
          CREATE
        </Button>
      </Link>
    </Toolbar>
  );
};

const MoviesList = () => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('id');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); 
  const {movies, dispatch} = useContext(MovieContext)

  useEffect(() => {
   getMovies(dispatch)
  }, [dispatch])

  console.log("movies", movies)

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = (id) => {
    deleteMovies(id, dispatch)
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Item>
          <EnhancedTableToolbar />
          <TableContainer>
            <Table sx={{ minWidth: 750 }} aria-labelledby='tableTitle'>
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={movies.length}
              />
              <TableBody>
                {stableSort(movies, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow tabIndex={-1} key={row._id}>
                        <TableCell id={labelId} align='left'>
                          {row._id}
                        </TableCell>
                        <TableCell>{row.title}</TableCell>
                        <TableCell align='right'>
                          <Avatar alt='avatar' variant="square"   sx={{ width: 56, height: 56 }} src={row.imgThumb === "" ? 'https://via.placeholder.com/150' : row.imgThumb} />
                        </TableCell>
                        <TableCell align='left'>{row.genre}</TableCell>
                        <TableCell align='left'>{row.year}</TableCell>
                        <TableCell align='left'>{row.isSeries === true ? "Series" : "Movie"}</TableCell>
                        <TableCell align='left'>
                          <Link
                            to={{pathname: `/movie/${row._id}`, movie: row}}
                            style={{ textDecoration: 'none' }}
                          >
                            <Button
                              color='primary'
                              variant='contained'
                              size='small'
                            >
                              Edit
                            </Button>
                          </Link>
                        </TableCell>
                        <TableCell align='left'>
                          <IconButton onClick={() => handleDelete(row._id)}>
                            <DeleteIcon color='error' />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component='div'
            count={movies.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Item>
      </Grid>
    </Grid>
  );
};

export default MoviesList;

