import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from '../theme/theme';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today for you</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    color: theme.colors.white,
    fontWeight: '700',
    fontSize: 28,
  },
});

export default Header;
