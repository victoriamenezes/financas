import React from 'react'
import { Link, Route } from 'react-router-dom';
// import * as React from 'react';
// import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import AppBar from '@mui/material/AppBar';
// import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { mainDashItems } from '../../components/DashboardSection/dashItems';
// import { dashboardStyles } from '../components/DashboardSection/dashStyles';
import { useParams, useNavigate } from 'react-router-dom';
// import { Grid } from '@mui/material'

export default function AdminDashboard() {
  const navigate = useNavigate();

  const navbarStyles = {
    drawer: {
        width: 320,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 320,
            boxSizing: 'border-box',
            backgroundColor: '#101F33',
            color: 'rgba(255, 255, 255, 0.7)',
        },
        '& .Mui-selected': {
            color: 'red',
        },
    },
    icons: {
        color: 'rgba(255, 255, 255, 0.7)!important',
        marginLeft: '20px',

    },
    text: {
        '& span': {
            marginLeft: '-10px',
            fontWeight: '600',
            fontSize: '16px',
        }
    }
};


  return (
    <Drawer
      sx={navbarStyles.drawer}
      variant="permanent"
      anchor="left"
    >
    <Toolbar />
    <Divider />
    <List>
      {mainDashItems.map((item, index) => (
        <ListItem
            button
            key={item.id}
            onClick={() => navigate(item.route)}
        >
          <ListItemIcon
            sx={navbarStyles.icons}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText
            sx={navbarStyles.text}
            primary={item.label}
          />
        </ListItem>
      ))}
    </List>
  </Drawer>
  );
};
