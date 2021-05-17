import { Container } from "@material-ui/core";
import React from "react";
import Banner from "./Banner";
import Label from "../Label/Label";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="header">
      <Container maxWidth="md">
        <NavBar />
        <Banner />
        <Label />
      </Container>
    </div>
  );
};

export default Header;
