import React, {useState, useRef, useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {add, Extrapolate, interpolate} from 'react-native-reanimated';
import {FlatList, PanGestureHandler, State} from 'react-native-gesture-handler';
import Card from '../components/Card';
import Header from '../components/Header';
import {cardsList} from '../mockData/cards';
import {theme} from '../theme/theme';
import {cardSwipe} from '../animations/cardSwipe';

const {event, Value, Clock} = Animated;

const PADDING = theme.padding.xLg;

const HomeScreen = () => {
  const [cardHeight, setCardHeight] = useState(0);
  const translationY = useRef<Animated.Value<number>>(new Value(0)).current;
  const state = useRef<Animated.Value<State>>(new Value(State.UNDETERMINED))
    .current;
  const velocityY = useRef<Animated.Value<number>>(new Value(0)).current;
  const clock = useRef<Animated.Clock>(new Clock()).current;
  const activeCardIndex = useRef<Animated.Value<number>>(new Value(0)).current;

  const cardAnimation = useMemo(
    () =>
      cardSwipe(
        translationY,
        state,
        velocityY,
        activeCardIndex,
        cardsList.length - 1,
        clock,
        cardHeight,
      ),
    [cardsList, cardHeight],
  );

  const onGesture = event([
    {
      nativeEvent: {
        translationY,
        state,
        velocityY,
      },
    },
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <PanGestureHandler
        onGestureEvent={onGesture}
        onHandlerStateChange={onGesture}>
        <Animated.View
          style={styles.contentContainer}
          onLayout={({nativeEvent: {layout}}) => setCardHeight(layout.height)}>
          <FlatList
            contentContainerStyle={styles.contentContainer}
            removeClippedSubviews={false}
            data={cardsList}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({item: card, index}) => {
              const position = index * -cardHeight;
              const nextPosition = (index + 1) * -cardHeight;
              const prevPosition = (index - 1) * -cardHeight;
              const firstItemSwipeDownTranslationBlock =
                index === 0 ? 50 : prevPosition;

              const translateY = interpolate(cardAnimation, {
                inputRange: [nextPosition, position, prevPosition],
                outputRange: [
                  position,
                  position,
                  firstItemSwipeDownTranslationBlock,
                ],
              });

              const scale = interpolate(cardAnimation, {
                inputRange: [nextPosition, position, prevPosition],
                outputRange: [0.8, 1, 1],
                extrapolate: Extrapolate.CLAMP,
              });

              return (
                <Animated.View
                  style={StyleSheet.flatten([
                    styles.cardWrapper,
                    {
                      height: cardHeight,
                    },
                    {
                      transform: [
                        {translateY: add(-position, translateY)},
                        {scale},
                      ],
                    },
                  ])}
                  key={card.id}>
                  <Card {...card} />
                </Animated.View>
              );
            }}
          />
        </Animated.View>
      </PanGestureHandler>
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
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default HomeScreen;
