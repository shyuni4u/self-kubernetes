import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';

import reducerModule from '../modules';


const styles = {
  layout: {
    display: 'flex',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    flexDirection: 'column',
    position: 'relative'
  },
  main: {
    flex: 1
  },
  footer: {
    width: '100%',
    height: '24px',
    textAlign: 'center',
    lineHeight: '24px',
    color: '#fff',
    backgroundColor: '#000',
    // position: 'absolute',
    // bottom: '0',
    fontSize: '12px'
  }
};

const configureStore = () => {
  const store = createStore(reducerModule);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development,'
});

export class RootApp extends App {
  render() {
    const { Component, other } = this.props;
    return (
      <>
        <Head>
          <title>Moreh - Dashboard</title>
        </Head>
        <div style={styles.layout}>
          <main style={styles.main}>
            <Component {...other} />
          </main>
          <footer style={styles.footer}>Copyright 2020 Moreh Authors.</footer>
        </div>
      </>
    );
  }
}

export default wrapper.withRedux(RootApp);