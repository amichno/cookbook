import React from 'react';
import { render, screen } from '@testing-library/react';
import CookBook from './components/CookBook/cookBook.component';

test('renders learn react link', () => {
  render(<CookBook />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
