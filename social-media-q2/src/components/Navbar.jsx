import { AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Social Media Analytics
        </Typography>
        <Tabs value={false} indicatorColor="secondary" textColor="inherit">
          <Tab label="Top Users" component={Link} to="/top-users" />
          <Tab label="Trending Posts" component={Link} to="/trending-posts" />
          <Tab label="Feed" component={Link} to="/feed" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;