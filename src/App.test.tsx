import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Learn fail Reactcococococcol link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn fail Reactcococococcol/i);
  expect(linkElement).toBeInTheDocument();
});
