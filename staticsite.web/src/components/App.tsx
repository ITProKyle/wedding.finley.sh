import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { compose } from 'redux';
import { Container } from 'semantic-ui-react';
import 'src/components/App.scss';
import Header from 'src/components/ui/header/Header';
import history from '../history';
import HomePage from 'src/components/staticPages/HomePage';
import { ThemeContext } from 'src/context/ThemeContext';

const App = () => {
  const { theme, settings } = useContext(ThemeContext);
  /**
   * Render the application component
   */
  return (
    <div className={`site-wrapper ${theme}`}>
      <Router history={history} data-test='site-router'>
        <Container
          className={`site ${theme}`}
          style={{ background: settings.background, color: settings.fontColor }}
          data-test='site-container'
        >
          <Header data-test='site-header'></Header>
          <Switch>
            {/* Static */}
            <Route
              exact
              path='/'
              component={HomePage}
              data-test='root-route'
            />
          </Switch>
        </Container>
      </Router>
    </div>
  )
}

export default compose(connect())(App) as React.ElementType;
