import React, {Component} from 'react';
import {getItem, getItems} from '../../../selectors/Selectors';
import {Image, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class DetailedItem extends Component {
  render() {
    const {route} = this.props;
    const id = route.params.id;
    const {urls} = this.props.item(id);

    return (
      <ScrollView style={styles.container}>
        <Image style={styles.mainImage} source={{uri: urls.regular}} />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  item: id => {
    return getItem(id, getItems(state));
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },

  mainImage: {
    height: 350,
    width: null,
  },
});

export default connect(
  mapStateToProps,
  null,
)(DetailedItem);
