import React, { useContext } from 'react';
import { Card, Icon } from 'semantic-ui-react'
import 'src/components/gifts/gifts.scss';
import { ThemeContext } from 'src/context/ThemeContext';

const PayPalMe: React.FC = (): JSX.Element => {
  const { theme, settings } = useContext(ThemeContext);
  return (
    <Card
      className={`${theme}`}
      href='https://paypal.me/itprokyle'
      style={{ background: settings.background, color: settings.fontColor }}
    >
      <Card.Content>
        <Icon
          color='blue'
          size='large'
          name='paypal'
        />
        <Card.Header>PayPal.me</Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Description>
          Help us pay off student loans & save for the future by making
          a cash gift through PayPal.
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default PayPalMe
