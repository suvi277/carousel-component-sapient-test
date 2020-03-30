import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import CarouselContainer from './containers/Carousel';

describe('Home Component', () => {
  const wrapper = shallow(<App />);

  it('should exist PageHeading Component', () => {
    expect(wrapper.find('PageHeading')).toHaveLength(1);
  });

  it('should exist CarouselContainer Component', () => {
    expect(wrapper.exists(CarouselContainer)).toBeTruthy();
  });
});
