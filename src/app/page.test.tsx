import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('should render heading', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Photo Gallery' })
    ).toBeDefined();
  });
});
