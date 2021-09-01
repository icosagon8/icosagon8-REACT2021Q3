import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { matchPath, StaticRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import cors from 'cors';
import { renderTemplate } from './renderTemplate';
import { App } from './App';
import characters from './store/slices/charactersSlice';
import character from './store/slices/characterSlice';
import { ROUTES } from './routes';
import { RouteModel } from './models/RouteModel';

const app = express();
app.use(cors());
app.use(express.static('dist'));

app.get('*', (req, res) => {
  const store = configureStore({
    reducer: { characters, character },
    devTools: true,
  });

  const activeRoute: RouteModel | Record<string, never> = ROUTES.find((route) => matchPath(req.url, route)) || {};
  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(store, req.path.split('/').slice(-1)[0])
    : Promise.resolve();

  promise.then(() => {
    const context = {};
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    );

    const preloadedState = store.getState();

    res.send(
      renderTemplate({
        cssPath: 'main.css',
        jsPath: 'main.js',
        content,
        preloadedState,
      })
    );
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port: 3000`);
});
