import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Toolbar, Box } from '@mui/material';
import ApplicationDrawer from './components/Drawer/Drawer';
import Home from './screens/Home';
import UserList from './screens/UserList';
import User from './screens/User';
import NewUser from './screens/NewUser';
import MoviesList from './screens/MoviesList';
import Movie from './screens/Movie';
import Login from './screens/Login';
import CategoryLists from './screens/categoryLists';
import { AuthContext } from './context/authContext/AuthContext';
import NewMovie from './screens/NewMovie';
import CategoryList from './screens/categoryList';
import NewCategoryList from './screens/NewCategoryList';

const drawerWidth = 240;

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Router>
        <Switch>
          <Route path='/login'>{user ? <Redirect to='/' /> : <Login />}</Route>
          {user && (
            <>
              <ApplicationDrawer />
              <Box
                component='main'
                sx={{
                  flexGrow: 1,
                  p: 3,
                  marginLeft: {
                    sm: `calc(62% - ${drawerWidth}px)`,
                    md: `calc(47% - ${drawerWidth}px)`,
                    lg: `calc(35% - ${drawerWidth}px)`,
                    xl: `calc(25% - ${drawerWidth}px)`,
                  },
                }}
              >
                <Toolbar />
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route path='/users'>
                  <UserList />
                </Route>
                <Route path='/user/:userId'>
                  <User />
                </Route>
                <Route path='/new-user'>
                  <NewUser />
                </Route>
                <Route path='/movies'>
                  <MoviesList />
                </Route>
                <Route path='/movie/:movieId'>
                  <Movie />
                </Route>
                <Route path='/new-movie'>
                  <NewMovie />
                </Route>
                <Route path='/lists'>
                  <CategoryLists />
                </Route>
                <Route path='/list'>
                  <CategoryList />
                </Route>
                <Route path='/new-list'>
                  <NewCategoryList/>
                </Route>
              </Box>{' '}
            </>
          )}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
