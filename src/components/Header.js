import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    height: (Platform.OS === 'ios' ? 70 : 50),
    paddingTop: (Platform.OS === 'ios' ? 20 : 0),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOffset: { height: 1, width: 0 },
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{ this.props.title }</Text>
      </View>
    );
  }
}
