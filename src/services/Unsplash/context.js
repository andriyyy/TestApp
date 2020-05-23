import React from 'react';

const UnsplashContext = React.createContext(null);

export const withUnsplash = Component => props => (
  <UnsplashContext.Consumer>
    {unsplash => <Component {...props} unsplash={unsplash} />}
  </UnsplashContext.Consumer>
);

export default UnsplashContext;
