import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import OtherScreen from '../screens/OtherScreen';
import Icons from 'react-native-vector-icons/Ionicons';
import {theme} from '../theme/theme';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          tabStyle: {
            //
          },
          style: styles.navigatorStyle,
          iconStyle: {
            //
          },
          labelStyle: {
            //
          },
          adaptive: true,
          inactiveTintColor: theme.colors.light100,
          activeTintColor: theme.colors.light,
        }}
        initialRouteName="Home">
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => {
              return (
                <Icons name="clipboard-outline" color={color} size={size} />
              );
            },
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => {
              return <Icons name="search-outline" color={color} size={size} />;
            },
          }}
          name="Browse"
          component={OtherScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => {
              return (
                <Icons name="bookmark-outline" color={color} size={size} />
              );
            },
          }}
          name="Following"
          component={OtherScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => {
              return (
                <Icons name="download-outline" color={color} size={size} />
              );
            },
          }}
          name="Downloads"
          component={OtherScreen}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
  navigatorStyle: {
    backgroundColor: 'transparent',
    elevation: 0,
    shadowOpacity: 0,
    borderTopColor: 'transparent',
  },
});

export default BottomNavigator;
