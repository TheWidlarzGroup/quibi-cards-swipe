/** @format */

import {State} from 'react-native-gesture-handler';
import Animated, {
  add,
  block,
  cond,
  eq,
  or,
  stopClock,
  set,
  and,
  greaterThan,
  lessThan,
  abs,
  sub,
  spring,
  clockRunning,
  startClock,
  multiply,
} from 'react-native-reanimated';

const {Value} = Animated;

const VELOCITY_THRESHOLD = 500;

export const cardSwipe = (
  translationY: Animated.Value<number>,
  dragState: Animated.Value<State>,
  velocityY: Animated.Value<number>,
  activeIndex: Animated.Value<number>,
  maxIndex: number,
  clock: Animated.Clock,
  cardHeight: number,
) => {
  const state = {
    finished: new Value(0),
    velocity: new Value(0),
    position: new Value(0),
    time: new Value(0),
  };

  const config = {
    damping: 12,
    tension: 1,
    friction: 2,
    mass: 0.2,
    stiffness: 121.6,
    overshootClamping: false,
    restSpeedThreshold: 0.001,
    restDisplacementThreshold: 0.001,
    toValue: new Value(0),
  };

  return block([
    cond(
      or(eq(dragState, State.ACTIVE), eq(dragState, State.BEGAN)),
      [stopClock(clock), add(translationY, state.position)],
      [
        cond(clockRunning(clock), 0, [
          set(state.finished, 0),
          set(state.time, 0),
          set(state.velocity, velocityY),
          set(state.position, add(translationY, state.position)),

          cond(
            and(eq(dragState, State.END), greaterThan(abs(translationY), 50)),
            [
              cond(
                or(
                  and(
                    lessThan(activeIndex, maxIndex),
                    lessThan(translationY, -cardHeight * 0.25),
                  ),
                  and(
                    lessThan(activeIndex, maxIndex),
                    lessThan(velocityY, -VELOCITY_THRESHOLD),
                  ),
                ),
                [set(activeIndex, add(activeIndex, 1))],
              ),
              cond(
                or(
                  and(
                    greaterThan(activeIndex, 0),
                    greaterThan(translationY, cardHeight * 0.25),
                  ),
                  and(
                    greaterThan(activeIndex, 0),
                    greaterThan(velocityY, VELOCITY_THRESHOLD),
                  ),
                ),
                [set(activeIndex, sub(activeIndex, 1))],
              ),
            ],
          ),

          set(config.toValue, multiply(activeIndex, -cardHeight)),
          cond(
            or(
              eq(dragState, State.UNDETERMINED),
              greaterThan(abs(translationY), 0),
            ),
            [startClock(clock)],
          ),

          set(translationY, 0),
          set(velocityY, 0),
        ]),

        spring(clock, state, config),
        cond(state.finished, stopClock(clock)),
        state.position,
      ],
    ),
  ]);
};
