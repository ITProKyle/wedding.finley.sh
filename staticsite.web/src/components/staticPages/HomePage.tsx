import React, { useContext } from 'react';
import { Button, Card, Container, Divider, Grid, Header, Icon } from 'semantic-ui-react';
import 'src/components/staticPages/HomePage.scss';
import { ThemeContext } from 'src/context/ThemeContext';
import CountdownClock from 'src/components/countdown/CountdownClock';
import AmazonWeddingRegistry from 'src/components/gifts/amazon';
import PayPalMe from 'src/components/gifts/paypal';

const HomePage: React.FC = () : JSX.Element => {
  const { theme, settings } = useContext(ThemeContext);

  return (
    <Container id='main' className={`page ${theme}`}>
      <CountdownClock
        size='large'
        endAt={'2020-10-10 10:20:00'}
        hideYear={true}
        hideMonth={true}
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

      <Grid centered className='add-to-calendar' textAlign='center'>
        <Grid.Row centered columns={2}>
          <Grid.Column textAlign='center'>
            <Header style={{ color: settings.fontColor }}>
              Ceremony
            </Header>
            <Button
              icon
              inverted={theme === 'dark'}
              labelPosition='left'
              onClick={event => {
                event.preventDefault();
                window.open('http://evt.to/immsmhdw')
              }}
            >
              <Icon name='calendar alternate outline'/>
              Add to Calendar
            </Button>
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <Header style={{ color: settings.fontColor }}>
              Reception
            </Header>
            <Button
              disabled
              icon
              inverted={theme === 'dark'}
              labelPosition='left'
              onClick={event => {
                event.preventDefault();
                window.open('#')
              }}
            >
              <Icon name='calendar alternate outline'/>
              Add to Calendar
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Divider inverted={theme === 'dark'} />

      <Header
        inverted={theme === 'dark'}
        size='large'
        textAlign='center'
      >
        Gifts
      </Header>
      <Card.Group centered={true}>
        <PayPalMe />
        <AmazonWeddingRegistry />
      </Card.Group>

    </Container>
  )
}

export default HomePage;
