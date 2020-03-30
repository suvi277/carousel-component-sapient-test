import React, { useEffect, useState } from 'react';
import PhotoCard from '../photoCard/PhotoCard';
import './Carousel.scss';
import { Photo } from '../../types/Photo';

interface Props {
	photos: Array<Photo>;
}

const CarouselComponent: React.FC<Props> = ({ photos = [] }) => {
	const [ current, setCurrent ] = useState(0);
	const [visibleItems, setVisibleItems] = useState(1);
	
	useEffect(() => {
		setVisibleItemOnScreen();
		window.addEventListener('resize', setVisibleItemOnScreen);
		return () => {
			window.removeEventListener('resize', setVisibleItemOnScreen);
		}
	}, []);

	const setVisibleItemOnScreen = () => {
		let item = 1;
		if (window.innerWidth >= 1024) {
			item = 5;
		} else if (window.innerWidth >= 768) {
			item = 3
		}
		
		setVisibleItems(item);
	}
  	const onPrevClick = () => {
		const resetToVeryBack = current === 0;
		const index = resetToVeryBack ? photos.length - 1 : current - 1;
		setCurrent(index);
	};

	const onNextClick = () => {
		const resetIndex = current === photos.length - 1;

		const index = resetIndex ? 0 : current + 1;
		setCurrent(index);
	}

	const slicePhotos = photos.slice(current, current + visibleItems);
	
  	const carouselItems = slicePhotos.length < visibleItems
    		? [...slicePhotos, ...photos.slice(0, visibleItems - slicePhotos.length) ]
			: slicePhotos;
	
	return (
		<div className="carousel-wrapper">
			<ul className="carousel-items" data-testid="carousel-items">
				{carouselItems.map((photo, index) => <PhotoCard key={index} {...photo}/>)}
			</ul>
			<button data-testid="prev-btn" type="button" onClick={onPrevClick} aria-label="previous" className="carousel-button prev">prev</button>
			<button data-testid="next-btn" type="button" onClick={onNextClick} aria-label="next" className="carousel-button next">next</button>
		</div>
	);
};

export default CarouselComponent;
