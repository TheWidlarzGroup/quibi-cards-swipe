import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import {FlatList} from 'react-native-gesture-handler';
import Card from '../components/Card';
import Header from '../components/Header';
import {cardsList} from '../mockData/cards';

const PADDING = 20;

const HomeScreen = () => {
  const [cardHeight, setCardHeight] = useState(0);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        contentContainerStyle={styles.contentContainer}
        onLayout={({nativeEvent: {layout}}) => setCardHeight(layout.height)}
        removeClippedSubviews={false}
        data={cardsList}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({item: card}) => {
          return (
            <Animated.View
              style={StyleSheet.flatten([
                styles.cardWrapper,
                {
                  height: cardHeight,
                },
              ])}
              key={card.id}>
              <Card {...card} />
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  contentContainer: {
    flex: 1,
  },
  cardWrapper: {
    padding: PADDING,
    width: '100%',
  },
});

export default HomeScreen;
