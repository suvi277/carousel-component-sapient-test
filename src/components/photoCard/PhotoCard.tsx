import React from 'react';
import { Photo } from '../../types/Photo';
import './PhotoCard.scss';

const PhotoCard: React.FC<Photo> = ({ previewURL, user }) => {
  return (
    <li className="carousel-item">
      <img className="carousel-image" src={previewURL} alt={user} />
      <p className="user-name">{user}</p>
    </li>
  );
};

export default PhotoCard;
