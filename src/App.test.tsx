import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import  App  from './App';
describe('App', () => {
  it('Renders Create Demand', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Create Demand');
  });
  
});

