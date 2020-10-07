import React, { useContext } from 'react';
import { Button, Card, Container, Divider, Grid, Header, Icon, Message } from 'semantic-ui-react';
import 'src/components/staticPages/HomePage.scss';
import { ThemeContext } from 'src/context/ThemeContext';
import CountdownClock from 'src/components/countdown/CountdownClock';
import AmazonWeddingRegistry from 'src/components/gifts/amazon';
import PayPalMe from 'src/components/gifts/paypal';

const Today = Date.now()
const WeddingDay = new Date("2020-10-10");

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

    <Message icon color='red'>
      <Icon name='youtube'/>
      <Message.Content>
        <Message.Header>Watch the ceremony here or on YouTube</Message.Header>
        <p>To engage in chat during the stream, watch from YouTube using the button provided below under <b>Ceremony</b>.</p>
      </Message.Content>
    </Message>

    <Container
      className="auto-resizable-iframe"
      style={{paddingBottom: "20px"}}
      textAlign="center"
    >
      <iframe
        title="Wedding live stream"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        src="https://www.youtube.com/embed/jAKIt2olS3k"
      >
      </iframe>
    </Container>

      <Grid centered className='add-to-calendar' textAlign='center'>
        <Grid.Row centered columns={1}>
          <Button
            icon
            inverted={theme === 'dark'}
            labelPosition='left'
            onClick={event => {
              event.preventDefault();
              window.open('https://forms.gle/Hj4ufvKWo27m8baCA ')
            }}
          >
            <Icon name='book'/>
            Sign Virtual Guest Book
          </Button>
        </Grid.Row>
        <Grid.Row centered columns={2}>
          <Grid.Column textAlign='center'>
            <Header style={{ color: settings.fontColor }}>
              Ceremony
            </Header>
            <p>10/10/2020 @ 10:20am PT</p>
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

            <br />
            <br />

            <Button
              icon
              disabled={WeddingDay.getTime() >= Today}
              inverted={theme === 'dark'}
              labelPosition='left'
              onClick={event => {
                event.preventDefault();
                window.open('https://youtu.be/jAKIt2olS3k')
              }}
            >
              <Icon name='youtube'/>
              Watch Now
            </Button>
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <Header style={{ color: settings.fontColor }}>
              Reception
            </Header>
            <p>10/10/2020 @ 11:30am PT</p>
            <Button
              icon
              inverted={theme === 'dark'}
              labelPosition='left'
              onClick={event => {
                event.preventDefault();
                window.open('https://evt.to/iaeaahsw')
              }}
            >
              <Icon name='calendar alternate outline'/>
              Add to Calendar
            </Button>

            <br />
            <br />

            <Button
              icon
              disabled={WeddingDay.getTime() >= Today}
              inverted={theme === 'dark'}
              labelPosition='left'
              onClick={event => {
                event.preventDefault();
                window.open('https://rackspace.zoom.us/j/92574082346')
              }}
            >
              <Icon name='video camera'/>
              Join Now
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
