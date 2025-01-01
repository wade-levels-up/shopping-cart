import { describe, expect, it, } from "vitest";
import { screen, render } from "@testing-library/react";
import Shop from "../Shop/Shop";

describe('Shop component', () => {
    it('Renders default component to screen', () => {
        render(<Shop />);

        screen.debug()

        const shop = screen.getByRole('main');

        expect(shop).toBeInTheDocument();
    })
})