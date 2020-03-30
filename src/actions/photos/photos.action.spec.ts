import { actions } from '../../constants/action.types';
import { Photo } from '../../types/Photo';
import { getPhotos, getPhotosSuccess, getPhotosFailure } from './photos.action';

describe('Photos Actions', () => {
    const { GET, SUCCESS, FAILURE } = actions.PHOTOS;
    it(`getPhotos should return ${GET} action`, () => {
        expect(getPhotos()).toEqual({
            type: GET
        });
    });

    it(`getPhotosSuccess should return ${SUCCESS} action`, () => {
        const mockData: Array<Photo> = [
            {
                user: 'example user',
                previewURL: 'imapge/to/path',
                likes: 34
            }
        ];
        expect(getPhotosSuccess(mockData)).toEqual({
            type: SUCCESS,
            payload: mockData
        });
    });

    it(`getPhotosFailure should return ${FAILURE} action`, () => {
        expect(getPhotosFailure({ errorMessage: [] })).toEqual({
            type: FAILURE,
            payload: {
                errorMessage: []
            }
        });
    });
});
