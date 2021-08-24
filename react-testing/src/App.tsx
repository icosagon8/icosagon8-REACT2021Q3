import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Details } from './pages/Details/Details';
import { Header } from './shared/Header/Header';
import { NotFound } from './pages/404';

export function App(): JSX.Element {
  return (
    <Router>
      <Header />
      <main className="container">
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <div className="page">
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route exact strict path="/about" component={About} />
                    <Route exact strict path="/details/:id" component={Details} />
                    <Route component={NotFound} />
                  </Switch>
                </div>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </main>
    </Router>
  );
}
