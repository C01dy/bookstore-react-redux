import React from 'react';

const RenderChecker = ({ isLoading, wasError, children }) => {
  if (isLoading) {
    return <h1>LOADING...</h1>;
  }

  if (wasError) {
    return <h1>Error</h1>;
  }

  return children;
};

export default RenderChecker;
