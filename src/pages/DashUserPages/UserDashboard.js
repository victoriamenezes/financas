import React from 'react';
// import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { dashUserItems } from '../../components/DashboardSection/DashUserItems';
import { dashboardStyles } from '../../components/DashboardSection/dashStyles';
import { useParams, useNavigate } from 'react-router-dom';


const UserDashboard = () => {
  // const drawerWidth = 220;
  const navigate = useNavigate();

  return (
      <Drawer
      sx={dashboardStyles.drawer}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {dashUserItems.map((item, index) => (
          <ListItem
            button
            key={item.id}
            disablePadding
            onClick={() => navigate(item.route)}
            >
            <ListItemButton>
              <ListItemIcon sx={dashboardStyles.icons}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
              // sx={dashboardStyles.text}
              primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  )
}

export default UserDashboard
