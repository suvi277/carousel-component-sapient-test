import { actions } from '../../constants/action.types';
import { Carousel, Photo } from '../../types/Photo';
import { photosReducer, initialState } from './photos.reducer';

describe('app/reducers/robot', () => {
    const state: Carousel<Photo> = initialState;
    const { GET, SUCCESS, FAILURE } = actions.PHOTOS;

    describe(`${GET} action`, () => {
        const expectedState = { status: 'loading' };

        test('should set the status to loading', () => {
            expect(
                photosReducer(state, {
                    type: GET
                })
            ).toEqual(expectedState);
        });
    });

    describe(`${SUCCESS} action`, () => {
        const mockData: Array<Photo> = [
            {
                previewURL: 'image/to/path',
                user: 'user_name',
                likes: 1
            }
        ];

        const expectedState = { status: 'loaded', photos: mockData };
        let reducerWithSuccessType: any;

        beforeEach(() => {
            reducerWithSuccessType = photosReducer(state, {
                type: SUCCESS,
                payload: mockData
            });
        });

        test('should set the status to error', () => {
            expect(reducerWithSuccessType.status).toEqual(expectedState.status);
        });

        test('should set the photos to mockData passed with reducer method', () => {
            expect(reducerWithSuccessType.photos).toEqual(expectedState.photos);
        });
    });

    describe(`${FAILURE} action`, () => {
        const mockError = { error: 'some message' };
        const expectedState = { status: 'error', error: mockError };
        let reducerWithFailureType: any;

        beforeEach(() => {
            reducerWithFailureType = photosReducer(state, {
                type: FAILURE,
                payload: mockError
            });
        });

        test('should set the status to error', () => {
            expect(reducerWithFailureType.status).toEqual(expectedState.status);
        });

        test('should set the error to mockError passed with reducer method', () => {
            expect(reducerWithFailureType.error).toEqual(expectedState.error);
        });
    });
});
