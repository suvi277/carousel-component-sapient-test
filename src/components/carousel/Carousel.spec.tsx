import React from 'react';
import CarouselComponent from './Carousel';
import {render, fireEvent, getByTestId} from '@testing-library/react'

const mockItems = [
	{
		previewURL: 'sample url 1',
		user: 'sample user name 1',
		likes: 12
	},
	{
		previewURL: 'sample url 2',
		user: 'sample user name 2',
		likes: 17
	},
	{
		previewURL: 'sample url 3',
		user: 'sample user name 3',
		likes: 40
	},
	{
		previewURL: 'sample url 4',
		user: 'sample user name 4',
		likes: 40
	},
	{
		previewURL: 'sample url 5',
		user: 'sample user name 5',
		likes: 30
	},
	{
		previewURL: 'sample url 6',
		user: 'sample user name 6',
		likes: 62
	},
	{
		previewURL: 'sample url 7',
		user: 'sample user name 7',
		likes: 37
	}
];
  
describe('<CarouselComponent /> ', () => {
	it("renders as expected", () => {
		const { getByTestId } = render(<CarouselComponent photos={mockItems} />);
		const items = getByTestId("carousel-items");
		expect(items.children.length).toBe(5);
	});

	it("should active the 3rd element from the photos list", () => {
		const { getByTestId } = render(<CarouselComponent photos={mockItems} />);
		const items = getByTestId("carousel-items");
		expect(items.children[2].textContent).toBe(mockItems[2].user);
	});

	it("previos and next buttons should work", () => {
		const { getByTestId } = render(<CarouselComponent photos={mockItems} />);
		const items = getByTestId("carousel-items");
		const previous = getByTestId("prev-btn");
		const next = getByTestId("next-btn");
		fireEvent.click(next);
		expect(items.children[2].textContent).toBe(mockItems[3].user)
		fireEvent.click(previous);
		expect(items.children[2].textContent).toBe(mockItems[2].user);
	});
});
