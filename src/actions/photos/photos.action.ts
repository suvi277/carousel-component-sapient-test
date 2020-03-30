import { actions } from '../../constants/action.types';
import { BaseAction, Photo } from '../../types/Photo';

export const getPhotos = (): BaseAction => ({
    type: actions.PHOTOS.GET
});

export const getPhotosSuccess = (photos: Array<Photo>): BaseAction => ({
    type: actions.PHOTOS.SUCCESS,
    payload: photos
});

export const getPhotosFailure = (error: object): BaseAction => ({
    type: actions.PHOTOS.FAILURE,
    payload: error
});
