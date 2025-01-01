import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react"
import Menu from './Menu'

describe('Menu Component', () => {
    it('Renders Menu Component', () => {
        render(<Menu />)

        const menu = screen.getByRole('navigation');

        expect(menu).toBeInTheDocument();
    })
})