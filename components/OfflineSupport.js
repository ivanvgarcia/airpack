import React, { PureComponent } from 'react';

class OfflineSupport extends PureComponent {
  componentDidMount() {
    console.log(navigator);
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('service worker registration successful');
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message);
        });
    }
  }

  render() {
    return null;
  }
}

export default OfflineSupport;
