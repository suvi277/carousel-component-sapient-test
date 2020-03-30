import React from 'react';
import { shallow, mount } from 'enzyme';
import Carousel from './Carousel';

describe('<Carousel /> with default props', () => {
	const defaultProps = {
		photos: []
	};
	const wrapper = shallow(<Carousel {...defaultProps} />);
	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
