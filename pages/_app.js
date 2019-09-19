import App from 'next/app';
import React from 'react';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import OfflineSupport from '../components/OfflineSupport';

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
        <OfflineSupport />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
