import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from '../Home/Home';
import Shop from '../Shop/Shop';

describe('App', () => {
  it('renders correct heading', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="home" element={<Home />} />
            <Route path="shop" element={<Shop />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // Check if App component renders headline
    expect(screen.getByRole('heading', { name: "itemMart" })).toBeInTheDocument();
  });

  it('renders header, main(img role), footer, and nav', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="home" element={<Home />} />
            <Route path="shop" element={<Shop />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Interior decor with leafy plant' })).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});