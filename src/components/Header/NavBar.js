import React from "react";
import logo from "../../assets/images/logo.svg";
import basKetIcon from "../../assets/images/Icon.svg";
import SearchIcon from "@material-ui/icons/Search";
import { Box } from "@material-ui/core";
import NavDrawer from "./NavDrawer";
const NavBar = () => {
  return (
    <div className="navBar flex-row">
      <div className="logoWrapper">
        <img src={logo} alt="" />
      </div>
      <ul className="navItemWrapper">
        <Box className="navItem" mx="1rem" component="li" display="flex">
          <SearchIcon style={{ marginTop: "7px" }} />
          <Box component="span" display={{ xs: "none", md: "block" }}>
            Search
          </Box>
        </Box>
        <Box
          className="navItem"
          mx="1rem"
          display={{ xs: "none", md: "flex" }}
          component="li"
        >
          Help
        </Box>
        <Box
          className="navItem"
          mx="1rem"
          display={{ xs: "none", md: "flex" }}
          component="li"
        >
          Account
        </Box>

        <li className="navItem">
          <img src={basKetIcon} alt="" />
        </li>
        <NavDrawer />
      </ul>
    </div>
  );
};

export default NavBar;
