import React from 'react';
import { connect } from 'react-redux';
import { State } from '../reducers';
import Loader from "react-loader-spinner";
import { getPhotos } from '../actions/photos/photos.action';
import { Photo } from '../types/Photo';
import { useEffect } from 'react';

interface Props {
	status: string;
	photos?: Array<Photo>;
	getPhotos: any;
}

const CarouselContainer: React.FC<Props> = ({ photos = [], status, getPhotos }) => {
	useEffect(() => {
		getPhotos();
	}, [getPhotos]);

	return (
		<div className="container">
			{status === 'loading' ? (
				<Loader type="Grid" color="#00BFFF" height={100} width={100} timeout={3000}/>
			) : (
				status === 'loaded' && (
						<div>Carousel Component</div>
				)
			)}
			{status === 'error' && <div className="error-content">Oops there is an error! Try Again later</div>}
		</div>
	);
};

const mapStateToProps = (state: State) => ({ ...state.photos });

const mapDispatchToProps = (dispatch: any) => ({ getPhotos: () => dispatch(getPhotos()) });

export default connect(mapStateToProps, mapDispatchToProps)(CarouselContainer);
