import React, { Component } from 'react';

import {
  StyleSheet,
  ScrollView,
} from 'react-native';

import Post from 'components/Post';

const styles = StyleSheet.create({
  itemsList: {
    padding: 20
  },
  item: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  },
  itemTitle: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  itemAuthor: {
    color: '#999999',
    fontSize: 13,
  },
  divider: {
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  itemDescription: {
    color: '#666666',
    fontSize: 13,
  },
});

export default class ItemsList extends Component {

  renderPosts = () => (
    this.props.data.map(item => <Post title={item.title} key={item.id} author={item.author} description={item.description} />)
  );

  render() {
    return (
      <ScrollView contentContainerStyle={styles.itemsList}>
        { this.renderPosts() }
      </ScrollView>
    );
  }
}
