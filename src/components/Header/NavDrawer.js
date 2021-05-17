import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import { Box } from "@material-ui/core";

const NavDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(true);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={() => setDrawerOpen(false)}
      onKeyDown={() => setDrawerOpen(false)}
    >
      <List>
        <ListItem className="drawerItem" button>
          <ListItemIcon>
            <MailIcon color="#ffff" />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem className="drawerItem" button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Account" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box component="div" display={{ xs: "block", sm: "block", md: "none" }}>
      <Button style={{ color: "#ffff" }} onClick={toggleDrawer}>
        <MenuIcon />
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpen={toggleDrawer}
        className="navDrawer"
      >
        {list()}
      </SwipeableDrawer>
    </Box>
  );
};

export default NavDrawer;
