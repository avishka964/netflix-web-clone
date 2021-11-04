import React, { useState } from 'react';
import './Navbar.scss';
import NetflixLogo from '../../assets/netflix_logo.png';
import Avatar from '../../assets/avatar.jpg';
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='container'>
        <div className='left'>
          <img src={NetflixLogo} alt='logo' />
          <Link to='/' className='link'>
            <span>Home</span>
          </Link>
          <Link to='series' className='link'>
            <span>Series</span>
          </Link>
          <Link to='movies' className='link'>
            <span>Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className='right'>
          <Search className='icon' />
          <span>Emma</span>
          <Notifications className='icon' />
          <img src={Avatar} alt='profile' />
          <div className='profile'>
            <ArrowDropDown className='icon' />
            <div className='options'>
              <span>Setting</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
