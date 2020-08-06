import React, { useContext } from 'react';
import { Container, Header } from 'semantic-ui-react';
import 'src/components/staticPages/HomePage.scss';
import { ThemeContext } from 'src/context/ThemeContext';
import CountdownClock from 'src/components/countdown/CountdownClock';

const HomePage: React.FC = () : JSX.Element => {
  const { theme, settings } = useContext(ThemeContext);

  return (
    <Container id='main' className={`page ${theme}`}>
      <CountdownClock
        size='large'
        endAt={'2020-10-10 10:20:00'}
        hideYear={true}
        hideMonth={false}
        hideDay={false}
        hideHour={false}
        hideMinute={false}
        hideSecond={false}
        titlePosition='top'
      />
      <Header
        className='page-title home subheader'
        inverted={theme === 'dark'}
        size='large'
        style={{ color: settings.fontColor }}
        textAlign='center'
      >
        More info will be provided here closer to the date
      </Header>
    </Container>
  )
}

export default HomePage;
