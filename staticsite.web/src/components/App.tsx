import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { compose } from 'redux';
import { Container, Segment } from 'semantic-ui-react';
import 'src/components/App.scss';
import Footer from 'src/components/ui/footer/Footer';
import Header from 'src/components/ui/header/Header';
import history from '../history';
import OurStoryPage from 'src/components/staticPages/OurStoryPage';
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
          <Header data-test='site-header' />
          <Segment basic>
            <Switch>
              {/* Static */}
              <Route
                exact
                path='/'
                component={HomePage}
                data-test='root-route'
              />
              <Route
                exact
                path='/our-story'
                component={OurStoryPage}
                data-test='root-route'
              />
            </Switch>
          </Segment>
          <Footer />
        </Container>
      </Router>
    </div>
  )
}

export default compose(connect())(App) as React.ElementType;
