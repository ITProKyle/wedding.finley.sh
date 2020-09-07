import React, { useContext } from 'react';
import { Container, Icon, List, Segment } from 'semantic-ui-react';
import 'src/components/ui/footer/Footer.scss';
import { ThemeContext } from 'src/context/ThemeContext';

const Footer: React.FC = () : JSX.Element => {
  const { theme } = useContext(ThemeContext);

  return (
    <Segment
      className={`footer ${theme}`}
      id='footer'
      vertical
      style={{ margin: '3.5em 0em 0em', padding: '3.5em 0em' }}
    >
      <Container
        className={`footer ${theme}`}
        inverted={theme === 'dark'}
        textAlign='center'
      >
        <List
          horizontal
          inverted={theme === 'dark'}
          divided
          link
          size='small'
        >
          <List.Item
            as='a'
            href='https://github.com/ITProKyle'
            target='blank'
          >
            Website by Kyle Finley
          </List.Item>
          <List.Item
            as='a'
            href='https://github.com/ITProKyle/wedding.finley.sh'
            target='blank'
          >
            Source Code <Icon fitted name='github'/>
          </List.Item>
        </List>
      </Container>
    </Segment>
  )
}

export default Footer;
