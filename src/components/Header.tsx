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
    paddingHorizontal: theme.padding.xLg,
    paddingVertical: theme.padding.md,
  },
  title: {
    color: theme.colors.white,
    fontWeight: '700',
    fontSize: theme.fontSizes.large,
  },
});

export default Header;
