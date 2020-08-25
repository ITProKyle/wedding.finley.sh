import React, { useContext } from 'react';
import { Card, Icon } from 'semantic-ui-react'
import 'src/components/gifts/gifts.scss';
import { ThemeContext } from 'src/context/ThemeContext';

const AmazonWeddingRegistry: React.FC = (): JSX.Element => {
  const { theme, settings } = useContext(ThemeContext);
  return (
    <Card
      className={`${theme}`}
      href='https://www.amazon.com/wedding/share/kyle-finley-nicole-sacharow'
      style={{ background: settings.background, color: settings.fontColor }}
    >
      <Card.Content>
        <Icon
          color='orange'
          size='large'
          name='amazon'
        />
        <Card.Header>Amazon</Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Description>
          Gifts can be purchased from our Amazon wedding registry and they
          will be shipped directly to us.
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default AmazonWeddingRegistry
