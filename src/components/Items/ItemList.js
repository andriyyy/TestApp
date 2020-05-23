import React, {Component} from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';

import Item from './Item';

class ItemList extends Component {
  onView = (key, navigation) => {
    navigation.navigate('Detailed', {id: key});
  };
  render() {
    const {items, navigation} = this.props;

    return (
      <FlatList
        data={items}
        renderItem={({item}) => (
          <View style={styles.over}>
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                this.onView(item.id, navigation);
              }}>
              <Item item={item} {...this.props} />
            </TouchableOpacity>
          </View>
        )}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

const styles = StyleSheet.create({
  over: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
  },
});
export default ItemList;
