import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from './Button'

describe('Button', () => {
  it('Renders a button to the screen', () => {
    render(<Button/>);

    screen.debug();

    // check if App components renders headline
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});