import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe('Home', () => {
    it('Renders home component', () => {
        render(<Home/>);
        
        const home = screen.getByRole('main');

        expect(home).toBeInTheDocument();
    })
})