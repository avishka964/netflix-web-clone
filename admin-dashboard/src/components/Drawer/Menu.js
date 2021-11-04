import { 
    Menu,
    MenuItem,
    Avatar,
    IconButton,
    Badge,
  } from '@mui/material';
  import {Mail, Notifications} from '@mui/icons-material'; 
  import ProfileImg from '../../assets/avatar.jpg';
  
  export const RenderMenu = (props) => (
      <Menu
        anchorEl={props.anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={props.menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={props.isMenuOpen}
        onClose={props.handleMenuClose}
      >
        <MenuItem onClick={props.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={props.handleMenuClose}>Logout</MenuItem>
      </Menu>
    );
  
  export const RenderMobileMenu = (props) => (
      <Menu
        anchorEl={props.mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={props.mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={props.isMobileMenuOpen}
        onClose={props.handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
            <Badge badgeContent={4} color='success'>
              <Mail />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton
            size='large'
            aria-label='show 17 new notifications'
            color='inherit'
          >
            <Badge badgeContent={17} color='success'>
              <Notifications />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={props.handleProfileMenuOpen}>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='primary-search-account-menu'
            aria-haspopup='true'
            color='inherit'
          >
            <Avatar
              alt='Avatar'
              src={ProfileImg}
              sx={{ width: 24, height: 24 }}
            />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );