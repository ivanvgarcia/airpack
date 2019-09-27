import React from 'react';
import Link from 'next/link';
import Alert from '../../alert/Alert';
import Logo from '../../../static/svgs/logo.svg';

const links = [].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href='/'>
          <a>
            <Logo />
          </a>
        </Link>
      </li>
      <li>
        <Link href='/sign-up' passHref>
          <button>Sign Up</button>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
    <Alert />
  </nav>
);

export default Nav;
