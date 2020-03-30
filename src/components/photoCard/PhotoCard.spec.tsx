import React from 'react';
import { shallow, mount } from 'enzyme';
import { Photo } from '../../types/Photo';
import PhotoCard from './PhotoCard';

describe('<PhotoCard /> with default props', () => {
  const testProps = {
    previewURL: 'sample title',
    user: 'sample owner name',
    likes: 12,
  };
  const wrapper = shallow(<PhotoCard {...testProps} />);
  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should exist card and shadow-lg classname', () => {
    expect(wrapper.find('.carousel-item')).toHaveLength(1);
  });

  it('should insert the prop values to correct places ', () => {
    const props: Photo = {
        ...testProps,
      },
      photoCardComp = mount(<PhotoCard {...props} />);

    expect(photoCardComp.find('.user-name').last().render().text()).toEqual(
      props.user
    );
    expect(photoCardComp.find('.carousel-image').render().attr('src')).toEqual(
      props.previewURL
    );
  });
});
