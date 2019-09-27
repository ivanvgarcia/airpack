import App from 'next/app';
import React from 'react';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import OfflineSupport from '../components/OfflineSupport';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import { create } from 'domain';

const theme = {
  colors: {
    primary: '#73D1CC',
    grey: '#D2D2D2',
    black: '#4A4A4A'
  }
};

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');

  html {
    height: 100%;
  }
  body {
    margin: 0;
    font-family: 'Quicksand', sans-serif;
    background: #d2d2d2;
    height: 100%;
  }
  #__next {
    height: 100%;
  }
  
  nav {
        text-align: center;
    }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
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

  button {
    background: ${props => props.theme.colors.primary};
    border: none;
    border-radius: 5px;
    color: #fff;
    padding: 10px;
    font-size: 1rem;
    cursor: pointer;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;  
    
      input  {
        border: none;
        margin: 10px 0;
        padding: 5px;
        width: 100%;
        max-width: 500px;
        font-size: 1.2rem;
     }

     span {
       margin: 12px 0;
       font-size: 1rem;
       font-weight: bold;
       color: red;
     }
  }

`;

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    console.log(reduxStore);
    return (
      <Provider store={reduxStore}>
        <Head>
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/static/apple-touch-icon.png'
          />
          >
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/static/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/static/favicon-16x16.png'
          />
          <link
            rel='mask-icon'
            href='/static/safari-pinned-tab.svg'
            color='#5bbad5'
          />
          <meta name='apple-mobile-web-app-title' content='Airpack' />
          <meta name='application-name' content='Airpack' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='theme-color' content='#ffffff' />
          <link rel='manifest' href='/static/manifest.json' />
          <link rel='manifest' href='/static/site.webmanifest' />
        </Head>
        <Global theme={theme} />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
