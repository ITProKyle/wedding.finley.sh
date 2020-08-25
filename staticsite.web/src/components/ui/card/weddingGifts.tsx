import React, { useContext } from 'react';
import { Card } from 'semantic-ui-react'
import { ThemeContext } from 'src/context/ThemeContext';

const WeddingGifts: React.FC = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);

  return (
    <Card.Group centered={true}>
      <Card>
        <Card.Header>Paypal</Card.Header>
      </Card>
      <Card>
        <Card.Header>Amazon</Card.Header>
      </Card>
    </Card.Group>
  )
}

export default WeddingGifts
