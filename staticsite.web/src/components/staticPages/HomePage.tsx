import React, { useContext } from 'react';
import { Container, Header } from 'semantic-ui-react';
import 'src/components/staticPages/HomePage.scss';
import { ThemeContext } from 'src/context/ThemeContext';

const HomePage: React.FC = () : JSX.Element => {
  const { theme, settings } = useContext(ThemeContext);

  return (
    <Container id='main' className={`page ${theme}`}>
      <Header
        className='page-title home'
        inverted={theme === 'dark'}
        size='huge'
        style={{ color: settings.fontColor }}
        textAlign='center'
      >
        10 / 10 / 2020
        <Header.Subheader>
          More info will be provided here closer to the date.
        </Header.Subheader>
      </Header>
    </Container>
  )
}

export default HomePage;
