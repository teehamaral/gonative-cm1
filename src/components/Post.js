import React from 'react';
import PropTypes from 'prop-types';

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

const Post = (props) => (
  <View style={styles.item}>
    <Text style={styles.itemTitle}>{props.title}</Text>
    <Text style={styles.itemAuthor}>{props.author}</Text>
    <View style={styles.divider} />
    <Text style={styles.itemDescription}>{props.description}</Text>
  </View>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Post;
