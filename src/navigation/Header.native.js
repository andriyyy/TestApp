import React from 'react';
import {Appbar, useTheme} from 'react-native-paper';
import {Icon} from 'react-native-elements';

export default (Header = ({scene, previous, navigation}) => {
  const theme = useTheme();
  const {options} = scene.descriptor;

  return (
    <Appbar.Header theme={theme}>
      {scene.route.name === 'Detailed' ? (
        <Icon
          name="chevron-left"
          type="evilicon"
          color="#fff"
          onPress={() => navigation.popToTop()}
        />
      ) : null}
      <Appbar.Content title={options.headerTitle} />
    </Appbar.Header>
  );
});
