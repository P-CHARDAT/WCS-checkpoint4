import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./NavMenu.styled";

const NavMenu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">💁🏻‍♂️</span>
        Qui suis-je ?
      </a>
      <a href="/portfolio" tabIndex={tabIndex}>
        <span aria-hidden="true">✏️</span>
        Mon Portfolio
      </a>
      <a href="/contact" tabIndex={tabIndex}>
        <span aria-hidden="true">📩</span>
        Contactez moi !
      </a>
    </StyledMenu>
  );
};

NavMenu.propTypes = {
  open: bool.isRequired,
};

export default NavMenu;
