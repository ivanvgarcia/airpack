import App from 'next/app';
import React from 'react';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import OfflineSupport from '../components/OfflineSupport';
import Head from 'next/head';

const theme = {
  colors: {
    primary: '#73D1CC',
    grey: '#D2D2D2',
    black: '#4A4A4A'
  }
};

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png">
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png">
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png">
          <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5">
          <meta name="apple-mobile-web-app-title" content="Airpack">
          <meta name="application-name" content="Airpack">
          <meta name="msapplication-TileColor" content="#ffffff">
          <meta name="theme-color" content="#ffffff">
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="manifest" href="/static/site.webmanifest" />
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
