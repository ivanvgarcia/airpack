import React from 'react';
import Link from 'next/link';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../../static/svgs/logo.svg';
import { logout } from '../../redux/actions/auth';

const Menu = ({ open, handleLinkClick }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const loading = useSelector(state => state.auth.loading);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    handleLinkClick();
  };

  const authLinks = () => (
    <>
      <li>
        <button onClick={handleLinkClick}>{user.name}</button>
      </li>
      <li>
        <button onClick={handleLogout}>Logout</button>
      </li>
    </>
  );

  const guestLinks = () => (
    <>
      <li>
        <Link href="/sign-up" passHref>
          <button onClick={handleLinkClick}>Sign Up</button>
        </Link>
      </li>
      <li>
        <Link href="/login" passHref>
          <button onClick={handleLinkClick}>Login</button>
        </Link>
      </li>
    </>
  );

  return (
    <StyledMenu open={open}>
      <Logo></Logo>
      <li>
        <Link href="/" passHref>
          <button onClick={handleLinkClick}>Home</button>
        </Link>
      </li>
      {!loading && isAuthenticated ? authLinks() : guestLinks()}
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired
};
export default Menu;
