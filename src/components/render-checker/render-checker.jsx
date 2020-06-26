import React from 'react';
import LoadingIndicator from '../loading-indicator/loading-indicator';
import PropTypes from 'prop-types';

const RenderChecker = ({ isLoading, wasError, children }) => {
  if (isLoading) {
    return <LoadingIndicator/>;
  }

  if (wasError) {
    return <h1>Error</h1>;
  }

  return children;
};

RenderChecker.propTypes = {
  isLoading: PropTypes.bool,
  wasError: PropTypes.object,
}


export default RenderChecker;
