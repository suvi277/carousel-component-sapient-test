export interface Photo {
	previewURL: string;
	likes: number;
	user: string;
}

interface ServiceLoading {
	status: string;
}

interface ServiceLoaded<Photo> {
	status: string;
	photos?: Array<Photo>;
}

interface ServiceError {
	status: string;
	error?: Error;
}

export interface BaseAction {
	type: string;
	payload?: any;
}

export type Carousel<T> = ServiceLoading | ServiceLoaded<T> | ServiceError;
