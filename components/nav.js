import React from 'react';
import Link from 'next/link';
import Alert from './alert/Alert';
import Logo from '../static/svgs/logo.svg';

const links = [].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
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
    <Alert />

    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');
      :global(html) {
        height: 100%;
      }
      :global(body) {
        margin: 0;
        font-family: 'Quicksand', sans-serif;
        background: #d2d2d2;
        height: 100%;
      }
      :global(#__next) {
        height: 100%;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
        list-style: none;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      nav > a {
        color: ${props => props.theme.colors.primary};
        text-decoration: none;
        font-size: 1.4rem;
        font-weight: 900;
        text-shadow: 1px 1px 1px #828282, 2px 2px 1px #828282;
        letter-spacing: 1px;
      }
    `}</style>
  </nav>
);

export default Nav;
