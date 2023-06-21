import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Stack } from '@mui/material';
import { Home as HomeIcon, Info as InfoIcon, Mail as MailIcon } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Rails CRUD App
        </Typography>
        <Stack flexDirection="row" gap={2}>
            <Button href='/' startIcon={<HomeIcon />} color="inherit">Users</Button>
            <Button href='/orders' startIcon={<InfoIcon />} color="inherit">Orders</Button>
            <Button href='/products' startIcon={<MailIcon />} color="inherit">Contact</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
