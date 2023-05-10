import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

function ImageGallery({ images, onClick }) {
  return (
    <Gallery>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} onClick={onClick} />
      ))}
    </Gallery>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
