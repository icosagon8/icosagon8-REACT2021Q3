import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotFound } from '../pages/404';

describe('<404 />', () => {
  test('Renders 404 page', () => {
    render(<NotFound />);

    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });
});
