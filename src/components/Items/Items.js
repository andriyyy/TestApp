import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text} from 'react-native';
import {itemsFetchData} from '../../actions/items';
import {
  getItems,
  getItemsIsLoading,
  getItemsHasErrored,
  getItemsError,
} from '../../selectors/Selectors';
import ItemList from './ItemList';
import {ActivityIndicator, Colors} from 'react-native-paper';

class Items extends Component {
  componentDidMount() {
    this.props.itemsFetchData();
  }

  render() {
    const {items} = this.props;

    if (this.props.isItemsLoading === true) {
      return <ActivityIndicator animating={true} color={Colors.red800} />;
    }
    if (this.props.isItemsErrored === true) {
      return <Text>Can not load Images: {this.props.itemsError}</Text>;
    }
    return (
      <View style={styles.container}>
        {items && <ItemList items={items} {...this.props} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    flexDirection: 'column',
  },
});

const mapStateToProps = state => ({
  items: getItems(state),
  isItemsLoading: getItemsIsLoading(state),
  isItemsErrored: getItemsHasErrored(state),
  itemsError: getItemsError(state),
});

const mapDispatchToProps = dispatch => ({
  itemsFetchData: () => dispatch(itemsFetchData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Items);
