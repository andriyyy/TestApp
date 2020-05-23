import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';

import {HomeNavigator} from './RootNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default connect()(AppNavigator);
