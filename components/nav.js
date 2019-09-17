import React from 'react';
import Link from 'next/link';

const links = [
  { href: 'https://github.com/ivanvgarcia/airpack', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>airPack</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(html) {
        height: 100%;
      }
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
        background: #ccc;
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
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #40e0d0;
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
