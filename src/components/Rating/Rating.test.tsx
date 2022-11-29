import { render, screen } from '@testing-library/react';

import { Rating } from './Rating';

describe('Rating component', () => {
  it('should render 3 stars',  () => {
    const maxRating: number = 3;

    render(<Rating maxRating={maxRating} />);

    expect(screen.getAllByTestId('rating-star')).toHaveLength(maxRating);
  });

  it('should render 5 stars with rating equal to 2', () => {
    const rating: number = 2;

    render(<Rating rating={rating} />);

    expect(screen.getAllByTestId('rating-star-checked')).toHaveLength(rating);
  });
});
