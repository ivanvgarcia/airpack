const withCSS = require('@zeit/next-css');
const NextWorkboxPlugin = require('next-workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
// const baseUrl = require('./config/baseUrl');

module.exports = withCSS({
  webpack(config, { isServer, buildId, dev }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    const workboxOptions = {
      clientsClaim: true,
      skipWaiting: true,
      globPatterns: ['.next/static/*', '.next/static/commons/*'],
      modifyUrlPrefix: {
        '.next': '/_next'
      },
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'networkFirst',
          options: {
            cacheName: 'html-cache'
          }
        },
        // {
        //   urlPattern: /[^3]\/packs\//,
        //   handler: 'networkFirst',
        //   options: {
        //     cacheName: 'html-cache'
        //   }
        // },
        // {
        //   urlPattern: new RegExp(`^${baseUrl}/packs`),
        //   handler: 'staleWhileRevalidate',
        //   options: {
        //     cacheName: 'api-cache',
        //     cacheableResponse: {
        //       statuses: [200]
        //     }
        //   }
        // },
        {
          urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
          handler: 'cacheFirst',
          options: {
            cacheName: 'image-cache',
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    };

    if (!isServer && !dev) {
      config.plugins.push(
        new NextWorkboxPlugin({
          buildId,
          ...workboxOptions
        })
      );
      new WebpackPwaManifest({
        filename: 'static/manifest.json',
        name: 'AirPack',
        short_name: 'AirPack',
        description: 'Find your pack',
        background_color: '#ffffff',
        theme_color: '#5755d9',
        display: 'standalone',
        orientation: 'portrait',
        fingerprints: false,
        inject: false,
        start_url: '/',
        ios: {
          'apple-mobile-web-app-title': 'AirPack',
          'apple-mobile-web-app-status-bar-style': '#5755d9'
        },
        icons: [
          {
            src: path.resolve('static/favicon.ico'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: '/static'
          }
        ],
        includeDirectory: true,
        publicPath: '..'
      });
    }

    return config;
  }
});
