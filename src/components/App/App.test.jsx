import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders correct heading', () => {
    render(<App/>);

    screen.debug();

    // check if App components renders headline
    expect(screen.getByRole('heading', { name: "Hello World"}).textContent).toMatch(/hello world/i);
  });
});