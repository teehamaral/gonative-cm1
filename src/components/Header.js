import React from 'react';
import PropTypes from 'prop-types';

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
  },
});

const Header = (props) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{props.title}</Text>
  </View>
);

Header.defaultProps = {
  title: 'GoNative App',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
