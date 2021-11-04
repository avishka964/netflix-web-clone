import React, { Fragment, useContext } from 'react';
import './App.scss';
import Home from './screens/home-page/Home';
import Video from './screens/video-page/Video';
import Register from './screens/register/Register';
import Login from './screens/login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {AuthContext} from './context/authContext/AuthContext';

const App = () => {
  const {user} = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {user ? <Home /> : <Redirect to='/register' />}
        </Route>
        <Route path='/register'>
          {!user ? <Register /> : <Redirect to='/' />}
        </Route>
        <Route path='/login'>{!user ? <Login /> : <Redirect to='/' />}</Route>
        {user && (
          <Fragment>
            <Route path='/movies'>
              <Home type='movie' />
            </Route>
            <Route path='/series'>
              <Home type='series' />
            </Route>
            <Route path='/watch'>
              <Video />
            </Route>
          </Fragment>
        )}
      </Switch>
    </Router>
  );
};

export default App;
