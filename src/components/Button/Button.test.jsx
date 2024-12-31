import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button'

describe('Button', () => {
  it("When a button is clicked it calls the function passed as it's onClick prop", async () => {
    const user = userEvent.setup();

    const handleClick = vi.fn() // Mock the function

    render(<Button onClick={handleClick}>test</Button>);
    const button = screen.getByRole('button', { name: 'test'});

    await user.click(button);

    // check if App components renders headline
    expect(handleClick).toHaveBeenCalled();
  });
});