import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';

import Header from './common/Header';
import Footer from './common/Footer';

import "../assets/styles/index.scss"

// progress bar
Router.onRouteChangeStart = () => { NProgress.start(); };
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default ({ children, title = 'EcoShop' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='defaultLanguage' content='fr' />
      <meta name='availableLanguages' content='fr, en' />
    </Head>

    <div className="body bg-dark">
      <Header>
        <h1>hello world</h1>
      </Header>

      <div className="body">
        { children }
      </div>

      <Footer />
    </div>

  </div>
);
