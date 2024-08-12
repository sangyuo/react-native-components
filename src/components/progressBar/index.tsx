import React, {useEffect, useRef} from 'react';
import Box from '../box';
import {
  classNames,
  ProgressBarProps,
  Text,
  useClassName,
  useVarianColor,
} from '../..';
import {Animated, Easing} from 'react-native';

const ProgressBar = ({
  value,
  varian,
  label,
  classBox,
  className,
  classLabel,
  classProgress,
  showLabel,
  renderLabel,
  ...rest
}: ProgressBarProps) => {
  const progress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progress.current, {
      toValue: value,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [value]);

  const classVarian = useVarianColor({varian});
  const stylesProgress = useClassName(
    classNames('h-2 rounded', classVarian.bg, classProgress),
  );

  const renderCustomLabel = () => {
    if (renderLabel) {
      return renderLabel(value);
    }
    return (
      <Text
        className={classNames(
          'text-sm text-right',
          classVarian.text,
          classLabel,
        )}>
        {label ?? `${value}%`}
      </Text>
    );
  };

  return (
    <Box className={classNames('column gap-1', classBox)} {...rest}>
      {showLabel && renderCustomLabel()}
      <Box className={classNames('h-2 flex-1 bg-gray-400 rounded', className)}>
        <Animated.View
          style={[
            stylesProgress,
            {
              width: progress.current.interpolate({
                inputRange: [0, value],
                outputRange: ['0%', `${value}%`],
              }),
            },
          ]}
        />
      </Box>
    </Box>
  );
};

ProgressBar.defaultProps = {
  value: 0,
  className: '',
  classProgress: '',
  varian: 'primary',
  classLabel: '',
  classBox: '',
};

export default ProgressBar;
