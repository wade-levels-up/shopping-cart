import { describe, expect, it, } from "vitest";
import { screen, render } from "@testing-library/react";
import ErrorPage from "../ErrorPage/ErrorPage";
import { MemoryRouter } from "react-router-dom";

describe('ErrorPage component', () => {
    it('Renders ErrorPage component to screen with text: Oops something went wrong', () => {
        render(
        <MemoryRouter>
            <ErrorPage />
        </MemoryRouter>
        );

        screen.debug()

        const errorPage = screen.getByRole('main');
        const errorText = screen.getByText('Oops something went wrong');
        const returnToHome = screen.getByText(/return to home/i);

        expect(returnToHome).toBeInTheDocument();
        expect(errorPage).toBeInTheDocument();
        expect(errorText).toBeInTheDocument();
    })
})