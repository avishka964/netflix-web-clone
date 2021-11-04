import React, { useState } from 'react';
import {
  Divider,
  ListItemText,
  ListItem,
  List,
  ListItemButton,
  ListSubheader,
} from '@mui/material';
import {
  Assessment,
  Feedback,
  Home,
  ListSharp,
  Mail,
  Message,
  Movie,
  Person,
  Report,
  Settings,
  Timeline,
  TrendingUp,
} from '@mui/icons-material';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from 'react-router-dom';

export const DrawerWidgets = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      {/* <Toolbar /> */}
      <Divider />
      <nav>
        <List subheader={<ListSubheader>Dashboard</ListSubheader>}>
          <Link to='/' style={{textDecoration:'none', color:'inherit'}}>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>
          </Link>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <Timeline />
              </ListItemIcon>
              <ListItemText primary='Analytics' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <TrendingUp />
              </ListItemIcon>
              <ListItemText primary='Sales' />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav>
        <List subheader={<ListSubheader>Quick Menu</ListSubheader>}>
        <Link to='/users' style={{textDecoration:'none', color:'inherit'}}>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary='Users' />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to='/movies' style={{textDecoration:'none', color:'inherit'}}>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemIcon>
                <Movie />
              </ListItemIcon>
              <ListItemText primary='Movies' />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to='/lists' style={{textDecoration:'none', color:'inherit'}}>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 5}
              onClick={(event) => handleListItemClick(event, 5)}
            >
              <ListItemIcon>
                <ListSharp />
              </ListItemIcon>
              <ListItemText primary='Lists' />
            </ListItemButton>
          </ListItem>
          </Link>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 6}
              onClick={(event) => handleListItemClick(event, 6)}
            >
              <ListItemIcon>
                <Assessment />
              </ListItemIcon>
              <ListItemText primary='Reports' />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav>
        <List subheader={<ListSubheader>Notifications</ListSubheader>}>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 7}
              onClick={(event) => handleListItemClick(event, 7)}
            >
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary='Mail' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 8}
              onClick={(event) => handleListItemClick(event, 8)}
            >
              <ListItemIcon>
                <Feedback />
              </ListItemIcon>
              <ListItemText primary='Feedback' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 9}
              onClick={(event) => handleListItemClick(event, 9)}
            >
              <ListItemIcon>
                <Message />
              </ListItemIcon>
              <ListItemText primary='Message' />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav>
        <List subheader={<ListSubheader>Staff</ListSubheader>}>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 10}
              onClick={(event) => handleListItemClick(event, 10)}
            >
              <ListItemIcon>
                <Report />
              </ListItemIcon>
              <ListItemText primary='Reports' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 11}
              onClick={(event) => handleListItemClick(event, 11)}
            >
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary='Settings' />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </div>
  );
};
