import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

class Item extends Component {
  render() {
    const {item} = this.props;

    return (
      <View>
        <Text>User name: {item.name}</Text>
        <Text>Description: {item.alt_description}</Text>
        <Image style={styles.imageThumbnail} source={{uri: item.urls.small}} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});

export default Item;
