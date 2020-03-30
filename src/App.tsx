import React, { Fragment } from 'react';
import './_shared/styles/main.scss';
import CarouselContainer  from './containers/Carousel';
import PageHeading from './components/pageHeading/PageHeading';

const App: React.FC = () => {
	return (
		<Fragment>
			<PageHeading title="Carousel Test" />
			<CarouselContainer />
		</Fragment>
	);
};

export default App;
