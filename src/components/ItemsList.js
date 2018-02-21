import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  ScrollView,
} from 'react-native';

import Post from 'components/Post';

const styles = StyleSheet.create({
  itemsList: {
    padding: 20,
  },
});

export default class ItemsList extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })).isRequired,
  };

  renderPosts = () => (
    this.props.data.map(item =>
      <Post title={item.title} key={item.id} author={item.author} description={item.description} />)
  );

  render() {
    return (
      <ScrollView contentContainerStyle={styles.itemsList}>
        { this.renderPosts() }
      </ScrollView>
    );
  }
}
