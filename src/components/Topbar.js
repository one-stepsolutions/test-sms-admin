import React from 'react';
import { AppBar, Toolbar, IconButton, Box, Avatar } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShareIcon from '@mui/icons-material/Share';
import UploadIcon from '@mui/icons-material/Upload';

const Topbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#fff', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end', padding: '0 20px' }}>
        {/* Icons with Spacing */}
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <IconButton>
            <NotificationsIcon sx={{ fontSize: 24, color: '#555' }} />
          </IconButton>
          <IconButton>
            <ShareIcon sx={{ fontSize: 24, color: '#555' }} />
          </IconButton>
          <IconButton>
            <UploadIcon sx={{ fontSize: 24, color: '#555' }} />
          </IconButton>
          {/* User Profile Avatar */}
          <Avatar alt="User Profile" src="/assets/images/Icons/Headers/Profile.svg" sx={{ width: 32, height: 32 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
