import React, { useState } from 'react';
import Link from 'next/link';
import Alert from '../../alert/Alert';
import Logo from '../../../static/svgs/logo.svg';
import Burger from '../../burger/Burger';
import Menu from '../../menu/Menu';
import { useSelector } from 'react-redux';
import { NavStyles } from './NavStyles';

const links = [].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const loading = useSelector(state => state.auth.loading);
  const user = useSelector(state => state.auth.user);
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  const authLinks = () => (
    <li>
      <p>{user.name}</p>
    </li>
  );

  const guestLinks = () => (
    <NavStyles.Links>
      <li>
        <Link href="/sign-up" passHref>
          <button>Sign Up</button>
        </Link>
      </li>
      <li>
        <Link href="/login" passHref>
          <button>Login</button>
        </Link>
      </li>
    </NavStyles.Links>
  );

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </li>

        {links.map(({ key, href, label }) => (
          <li key={key}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} handleLinkClick={handleLinkClick} />
      <Alert />
    </nav>
  );
};

export default Nav;
