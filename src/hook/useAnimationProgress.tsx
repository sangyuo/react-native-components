import {useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';

interface Props extends Animated.TimingAnimationConfig {}
const useAnimationProgress = ({toValue, ...rest}: Props) => {
  const progress = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(progress, {
      ...rest,
      toValue,
    }).start();
  }, [toValue]);
  return progress;
};

useAnimationProgress.defaultProps = {
  useNativeDriver: false,
  easing: Easing.linear,
  duration: 1000,
};

export default useAnimationProgress;
