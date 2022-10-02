import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//importing MUI
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { green, pink } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";

//importing images
import profile from "../../../public/images/profile.png";
import nomadic from "../../../public/images/Nomadic.png";

//importing styles
import styles from "./styles.module.css";

//importing other comps.
import Search from "./search";

const Header = ({ displaySearch = false }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const userDetails = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const logoutHandler = () =>{
    localStorage.clear();
    navigate("/login");
  }

  return (
    <div className={styles["main-header"]}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Link
          className={`${styles["custom-link"]} ${styles["logo"]}`}
          to={"/dashboard"}
        >
          <img className={styles["nomadic"]} src={nomadic} />
        </Link>
        {displaySearch && <Search />}
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <img className={styles["profile-image"]} src={profile} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {loggedIn && (
          <div>
            {" "}
            <MenuItem>
              <Link
                className={`${styles["custom-link"]} ${styles["header-name"]}`}
                to={"/profile"}
              >
                Hi {userDetails.name}
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className={styles["custom-link"]} to={"/profile"}>
                <Avatar sx={{ bgcolor: pink[500] }}>
                  <PersonIcon />
                </Avatar>
                Profile
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className={styles["custom-link"]} to={"/bookings"}>
                <Avatar sx={{ bgcolor: green[500] }}>
                  <AssignmentIcon />
                </Avatar>
                My Bookings
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className={styles["custom-link"]} to={"/orders"}>
                <Avatar sx={{ bgcolor: green[500] }}>
                  <AssignmentIcon />
                </Avatar>
                My Orders
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className={styles["custom-link"]} to={"/wishlist"}>
                <Avatar sx={{ bgcolor: green[500] }}>
                  <AssignmentIcon />
                </Avatar>
                Wishlist
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className={styles["custom-link"]} to={"/properties"}>
                <Avatar sx={{ bgcolor: green[500] }}>
                  <AssignmentIcon />
                </Avatar>
                My Properties
              </Link>
            </MenuItem>
            <MenuItem onClick={logoutHandler}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </div>
        )}
        {!loggedIn && (
          <div>
            <MenuItem>
              <Link className={styles["custom-link"]} to={"/login"}>
                <Avatar sx={{ bgcolor: pink[500] }}>
                  <PersonIcon />
                </Avatar>
                Login
              </Link>
            </MenuItem>
          </div>
        )}
      </Menu>
    </div>
  );
};

export default Header;
