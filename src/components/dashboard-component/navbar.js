/* eslint-disable linebreak-style */
import { useState, React } from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {AccountCircle,Notifications} from '@material-ui/icons';
import logo from "../../assets/logo.png";

const NavBar = ({ onMobileNavOpen, ...rest }) => {
  const [notifications] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar elevation={0} {...rest} style={{ backgroundColor: "#1a3b51" }}>
      <Toolbar>
        <RouterLink to="/">
          <img src={logo} />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Hidden lgDown>
          <IconButton color="inherit">
          <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <Notifications />
              </Badge>
          </IconButton>
          <IconButton>
             <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <AccountCircle style={{color:'#fff'}} />
              </Badge>
              <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            style={{color:'#fff'}}
          >
            Vossle AR
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Change Password</MenuItem>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Sign Out</MenuItem>
          </Menu>
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

NavBar.propTypes = {
  onMobileNavOpen: PropTypes.func,
};

export default NavBar;
