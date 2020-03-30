import React from 'react';
import { shallow, mount } from 'enzyme';
import { Photo } from '../../types/Photo';
import Select from '../select/Select';
import PhotoCard from './PhotoCard';

describe('<PhotoCard /> with default props', () => {
    const defaultProps = {
        title: 'sample title',
        ownername: 'sample owner name',
        description: {
            _content: 'some content'
        },
        url_q: 'url/path',
        owner: 'sampleowner',
        id: 'some id',
        tags: ''
    };
    const wrapper = shallow(<PhotoCard {...defaultProps} />);
    it('renders as expected', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should exist card and shadow-lg classname', () => {
        expect(wrapper.find('.card.shadow-lg')).toHaveLength(1);
    });

    it('should insert the prop values to correct places ', () => {
        const props: Photo = {
                ...defaultProps,
                tags: 'tag1 tag2'
            },
            photoCardComp = mount(<PhotoCard {...props} />);

        expect(photoCardComp.find('.card-title a').first().render().text()).toEqual(props.title);
        expect(photoCardComp.find('.card-title a').last().render().text()).toEqual(props.ownername);
        expect(photoCardComp.find('.card-img-top').render().attr('src')).toEqual(props.url_q);
    });

    it('should call the Select component when tags are empty ', () => {
        const props: Photo = {
                ...defaultProps,
                tags: ''
            },
            photoCardComp = shallow(<PhotoCard {...props} />);

        expect(photoCardComp.exists(Select)).toBeFalsy();
    });

    describe('when tags are not empty ', () => {
        const props: Photo = {
            ...defaultProps,
            tags: 'tag1 tag2'
        };
        let photoCardComp: any, expectedtags: any;
        beforeEach(() => {
            photoCardComp = mount(<PhotoCard {...props} />);
            expectedtags = props.tags.split(' ');
        });
        it('should call the Select component', () => {
            expect(photoCardComp.exists(Select)).toBeTruthy();
        });
        it('should call the Select component with valid props', () => {
            expect(photoCardComp.find('Select').prop('allOptions')).toEqual(expectedtags);
            expect(photoCardComp.find('Select').prop('label')).toEqual('Tags');
        });
    });
});
