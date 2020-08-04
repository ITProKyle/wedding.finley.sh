import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders description', () => {
  const { getByText } = render(<App />);
  const descriptionElement = getByText(/More info/i);
  expect(descriptionElement).toBeInTheDocument();
});
