import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CarouselComponent from './Carousel';

const mockItems = [
  {
    previewURL: 'sample url 1',
    user: 'sample user name 1',
    likes: 12,
  },
  {
    previewURL: 'sample url 2',
    user: 'sample user name 2',
    likes: 17,
  },
  {
    previewURL: 'sample url 3',
    user: 'sample user name 3',
    likes: 40,
  },
  {
    previewURL: 'sample url 4',
    user: 'sample user name 4',
    likes: 40,
  },
  {
    previewURL: 'sample url 5',
    user: 'sample user name 5',
    likes: 30,
  },
  {
    previewURL: 'sample url 6',
    user: 'sample user name 6',
    likes: 62,
  },
  {
    previewURL: 'sample url 7',
    user: 'sample user name 7',
    likes: 37,
  },
];

function fireResize(width: number) {
  window.innerWidth = width;
  window.dispatchEvent(new Event('resize'));
}

describe('<CarouselComponent /> ', () => {
  describe('when renders in desktop viewport', () => {
    beforeEach(() => {
      fireResize(1280);
    });

    it('should render 5 carousel items', () => {
      const { getByTestId } = render(<CarouselComponent photos={mockItems} />);
      const items = getByTestId('carousel-items');
      expect(items.children.length).toBe(5);
    });

    it('should active the 3rd element from the photos list', () => {
      const { getByTestId } = render(<CarouselComponent photos={mockItems} />);
      const items = getByTestId('carousel-items');
      expect(items.children[2].textContent).toBe(mockItems[2].user);
    });

    it('previos and next buttons should work', () => {
      const { getByTestId } = render(<CarouselComponent photos={mockItems} />);
      const items = getByTestId('carousel-items');
      const previous = getByTestId('prev-btn');
      const next = getByTestId('next-btn');
      fireEvent.click(next);
      expect(items.children[2].textContent).toBe(mockItems[3].user);
      fireEvent.click(previous);
      expect(items.children[2].textContent).toBe(mockItems[2].user);
    });
  });

  describe('when renders in mobile viewport', () => {
    beforeEach(() => {
      fireResize(480);
    });

    it('should render 1 carousel item', () => {
      const { getByTestId } = render(<CarouselComponent photos={mockItems} />);
      const items = getByTestId('carousel-items');
      expect(items.children.length).toBe(1);
    });
  });

  describe('when renders in tablet viewport', () => {
    beforeEach(() => {
      fireResize(960);
    });

    it('should render 3 carousel items', () => {
      const { getByTestId } = render(<CarouselComponent photos={mockItems} />);
      const items = getByTestId('carousel-items');
      expect(items.children.length).toBe(3);
    });
  });
});
