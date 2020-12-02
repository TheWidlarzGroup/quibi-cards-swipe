import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const OtherScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>s</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'black',
  },
});

export default OtherScreen;
