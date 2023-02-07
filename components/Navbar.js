import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, ToggleButton } from "@mui/material";
import jwt_decode from "jwt-decode";

import { setUser } from "../redux/actions/userAction";
import { getToken } from "../utils/token";

import NotificationIcon from "./NotificationIcon";
import NotificationList from "./NotificationList";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { LightModeIcon, DarkModeIcon } from '@mui/icons-material';
//import DarkModeIcon from '@mui/icons-material/DarkMode';
//import LightModeIcon from '@mui/icons-material/LightMode';
//import ToggleColorMode from "./ToggleColorMode";
  
const Navbar = () => {
  const dispatch = useDispatch();
  // const darkMode = useSelector((state) => state.darkMode);
  // const [selected, setSelected] = React.useState(false);
  const userReducer = useSelector((state) => state.userReducer);
  const {
    user: { email },
  } = userReducer;

  const [listNotification, setListNotification] = useState([
    {
      type: "info",
      message: "this is an info notification",
    },
    {
      type: "warning",
      message: "this is a warning notification",
    },
    {
      type: "error",
      message: "this is an error notification",
    },
  ]);
  const [unreadNotifCount, setUnreadNotifCount] = useState(3);
  const [anchor, setAnchor] = useState(null);
  const [notifMenuIsOpen, setNotifMenuIsOpen] = useState(false);

  function setUserData() {
    const token = getToken("token");
    const decoded = jwt_decode(token);
    const payloadUser = {
      email: decoded.email,
      username: decoded.username,
    };
    dispatch(setUser(payloadUser));
  }

  function handleNotificationMenuOpen(event) {
    setAnchor(event.currentTarget);
    setNotifMenuIsOpen(true);
  }

  function handleCloseNotificationMenu() {
    setNotifMenuIsOpen(false);
  }

  return (
    <Box
      display={"flex"}
      justifyContent={"flex-end"}
      sx={{ width: "100%", background: "white", px: 2, py: 1 }}
    >
      
      {/* <ToggleButton
        value="check"
        selected={selected}
        onChange={() => {
          setSelected(!selected);
        }}
        onClick={() => dispatch({ type: "set", darkMode: !darkMode })}
        title="Toggle Light/Dark Mode"
      >
        {selected ? <DarkModeIcon /> : <LightModeIcon />}
      </ToggleButton> */}

      <NotificationIcon
        notifCount={unreadNotifCount}
        anchorEL={anchor}
        handleOpen={(e) => handleNotificationMenuOpen(e)}
      />
      <NotificationList
        isOpen={notifMenuIsOpen}
        anchorEL={anchor}
        handleClose={() => handleCloseNotificationMenu()}
        notificationList={listNotification}
      />
    </Box>
  );
};

export default Navbar;
