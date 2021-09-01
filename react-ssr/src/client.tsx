import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import './assets/styles/styles.scss';
import character from './store/slices/characterSlice';
import characters from './store/slices/charactersSlice';
import { RootState } from './store/store';

declare global {
  interface Window {
    __PRELOADED_STATE__?: RootState;
  }
}

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

export const store = configureStore({
  reducer: { characters, character },
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
});

const rootElement = document.getElementById('root');
ReactDOM.hydrate(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement || document.createElement('div')
);
