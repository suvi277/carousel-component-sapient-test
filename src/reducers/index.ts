import { combineReducers } from 'redux';
import { Carousel, Photo } from '../types/Photo';
import { photosReducer } from './photos/photos.reducer';

export interface State {
	photos: Carousel<Photo>;
}

export const rootReducers = combineReducers<State>({
	photos: photosReducer
});
