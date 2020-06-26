import React from 'react';
import LoadingIndicator from '../loading-indicator/loading-indicator';

const RenderChecker = ({ isLoading, wasError, children }) => {
  if (isLoading) {
    return <LoadingIndicator/>;
  }

  if (wasError) {
    return <h1>Error</h1>;
  }

  return children;
};

export default RenderChecker;
