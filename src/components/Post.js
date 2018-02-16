import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
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

export default class Post extends Component {
  render() {
    return (
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{this.props.title}</Text>
        <Text style={styles.itemAuthor}>{this.props.author}</Text>
        <View style={styles.divider} />
        <Text style={styles.itemDescription}>{this.props.description}</Text>
      </View>
    );
  }
}
