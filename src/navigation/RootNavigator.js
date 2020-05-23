import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Header from './Header';

import HomePageScreen from '../components/Home';
import DetailedPageScreen from '../components/Items/DetailedItem';

const HomeStackNavigator = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator
      screenOptions={{
        header: ({scene, previous, navigation}) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}>
      <HomeStackNavigator.Screen
        name="HomePage"
        component={HomePageScreen}
        options={{headerTitle: 'Home Page'}}
      />
      <HomeStackNavigator.Screen
        name="Detailed"
        component={DetailedPageScreen}
        options={{headerTitle: 'Detailed info'}}
      />
    </HomeStackNavigator.Navigator>
  );
};
