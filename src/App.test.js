import { render, screen } from '@testing-library/react';
import App from './App';

test('renders head', () => {
  render(<App />);
  const linkElement = screen.getByText(/head/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders count', () => {
  render(<App />);
  const ele = screen.getByText(0);
  expect(ele).toBeInTheDocument();
});
