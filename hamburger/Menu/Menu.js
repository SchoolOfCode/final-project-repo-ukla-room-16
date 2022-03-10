import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/welcome" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        About the App
      </a>
      <a href="/welcome#quickstart" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Quickstart
        </a>
      <a href="/welcome#AboutUs" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Who we are
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
