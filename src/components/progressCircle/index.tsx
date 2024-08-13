import React, {useEffect, useRef} from 'react';
import Box from '../box';
import {
  classNames,
  ProgressCircleProps,
  Text,
  useCircleSpecs,
  useVarianColor,
} from '../..';
import {Animated, Easing} from 'react-native';
import {Circle, G, Svg} from 'react-native-svg';
import {COLORS} from '../../config/Colors';

const ProgressCircle = ({
  value,
  varian,
  label,
  className,
  classLabel,
  showLabel,
  size,
  colorBackground,
  colorProgress,
  strokeWidth,
  renderLabel,
  ...rest
}: ProgressCircleProps) => {
  const progress = useRef(new Animated.Value(0));
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const {radius, circumference, strokeDasharray} = useCircleSpecs({
    size,
    strokeWidth,
  });

  useEffect(() => {
    Animated.timing(progress.current, {
      toValue: value,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [value]);

  const classVarian = useVarianColor({varian});

  const renderCustomLabel = () => {
    if (renderLabel) {
      return renderLabel(value);
    }
    return (
      <Text
        className={classNames(
          'text-sm text-center',
          classVarian.text,
          classLabel,
        )}>
        {label ?? `${value}%`}
      </Text>
    );
  };

  return (
    <Box
      className={classNames(
        `relative center w-[${size}] h-[${size}]`,
        className,
      )}
      {...rest}>
      {showLabel && <Box className="absolute">{renderCustomLabel()}</Box>}
      <Svg height={size} width={size} viewBox="0 0 100 100">
        <G transform="rotate(-90, 50, 50)">
          <Circle
            cx={size}
            cy={size}
            r={radius}
            stroke={colorBackground ?? COLORS['gray-400']}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <AnimatedCircle
            cx={size}
            cy={size}
            r={radius}
            stroke={colorProgress ?? classVarian.color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={progress.current.interpolate({
              inputRange: [0, 100],
              outputRange: [circumference, 0],
              extrapolate: 'clamp',
            })}
          />
        </G>
      </Svg>
    </Box>
  );
};

ProgressCircle.defaultProps = {
  value: 0,
  className: '',
  varian: 'primary',
  classLabel: '',
  size: 50,
  strokeWidth: 8,
};

export default ProgressCircle;
