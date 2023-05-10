import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItem } from './ImageGalleryItem.styled';

function ImageGalleryItem({ image, onClick }) {
  const { webformatURL, tags, largeImageURL } = image;
  return (
    <GalleryItem>
      <img
        className="galery-image"
        src={webformatURL}
        alt={tags}
        onClick={() => onClick(largeImageURL, tags)}
      />
    </GalleryItem>
  );
}
ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
