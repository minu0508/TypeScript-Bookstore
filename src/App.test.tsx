import App from './App';
import { render, screen } from '@testing-library/react';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Book Store/i);
  expect(linkElement).toBeInTheDocument();
});
