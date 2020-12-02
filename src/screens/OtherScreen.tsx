import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {theme} from '../theme/theme';

const OtherScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Other screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: theme.colors.black,
  },
});

export default OtherScreen;
