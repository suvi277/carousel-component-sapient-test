import React from 'react';
import { shallow, mount } from 'enzyme';
import PageHeading from './PageHeading';

describe('PageHeading Component', () => {
  const wrapper = shallow(<PageHeading title="" />);
  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should exist h1 tag', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('should match h1 innerText with prop title ', () => {
    const pageHeadingComp = mount(<PageHeading title="Some Title" />);

    expect(pageHeadingComp.find('h1').render().text()).toEqual('Some Title');
  });
});
