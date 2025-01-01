import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Cart from './Cart';

describe('Cart component', () => {
    it('Renders Cart component', () => {
        render(<Cart />);

        expect(screen.getByText('Cart')).toBeInTheDocument();
    })
})