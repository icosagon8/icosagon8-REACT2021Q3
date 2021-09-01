import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Header } from './shared/Header/Header';
import { NotFound } from './pages/404';
import { ROUTES } from './routes';

export function App(): JSX.Element {
  return (
    <React.Fragment>
      <Header />
      <main className="container">
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <div className="page">
                  <Switch location={location}>
                    {ROUTES.map((route) => (
                      <Route {...route} key={route.path} />
                    ))}
                    <Route component={NotFound} />
                  </Switch>
                </div>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </main>
    </React.Fragment>
  );
}
