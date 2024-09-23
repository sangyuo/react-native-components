import {useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';

interface Props extends Animated.TimingAnimationConfig {}
const useAnimationProgress = ({
  toValue,
  useNativeDriver = false,
  easing = Easing.linear,
  duration = 1000,
  ...rest
}: Props) => {
  const progress = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(progress, {
      ...rest,
      useNativeDriver,
      easing,
      duration,
      toValue,
    }).start();
  }, [toValue]);
  return progress;
};

export default useAnimationProgress;
