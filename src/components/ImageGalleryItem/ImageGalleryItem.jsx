import React from 'react';
import PropTypes from 'prop-types';

function ImageGalleryItem({ image }) {
  const { id, webformatURL, largeImageURL, tags } = image;
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt={tags} />
    </li>
  );
}
ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};

export default ImageGalleryItem;
