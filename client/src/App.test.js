import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('¿hay un link llamado About Me?', () => {
  render(<App />);
  const linkElement = screen.getByText(/About Me/i);
  expect(linkElement).toBeInTheDocument();
});
test('¿El título del LandingPage es Recetas?', () => {
  const { getByText } = render(<App/>);
  const bien = getByText(/Recetas/i);
  expect(bien).toBeInTheDocument();
})

