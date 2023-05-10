import React from 'react';
import PropTypes from 'prop-types';

import { LoadMoreButton } from './Button.styled';

function Button({ onClick }) {
  return (
    <LoadMoreButton type="button" onClick={onClick}>
      Load more
    </LoadMoreButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
