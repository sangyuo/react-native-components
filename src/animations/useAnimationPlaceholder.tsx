import {useRef, useEffect} from 'react';
import {Animated} from 'react-native';

interface Props {
  fromValue?: number;
  toValue?: number;
  duration?: number;
  useNativeDriver?: boolean;
  animationType?: 'shine' | 'opacity';
  disableAnimation?: boolean;
}

const useAnimationPlaceholder = ({
  fromValue = 0,
  toValue = 100,
  duration = 750,
  useNativeDriver = true,
  animationType = 'opacity',
  disableAnimation = false,
}: Props) => {
  const animationValue = useRef(new Animated.Value(fromValue)).current;

  useEffect(() => {
    const animations = {
      opacity: [
        Animated.timing(animationValue, {
          toValue,
          duration,
          useNativeDriver,
        }),
        Animated.timing(animationValue, {
          toValue: fromValue,
          duration,
          useNativeDriver,
        }),
      ],
      shine: [
        Animated.timing(animationValue, {
          toValue: toValue,
          duration,
          useNativeDriver,
        }),
      ],
    };
    const animation = Animated.loop(
      Animated.sequence(animations[animationType]),
    );
    if (!disableAnimation) {
      animation.start();
    }
    return () => {
      animation.stop();
    };
  }, [disableAnimation]);

  if (animationType === 'opacity') {
    return {
      opacity: animationValue.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1],
      }),
    };
  }
  const left = animationValue.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '75%'],
  });

  return {left};
};

export default useAnimationPlaceholder;
