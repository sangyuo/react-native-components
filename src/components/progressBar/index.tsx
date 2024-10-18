import React from 'react';
import {
  Box,
  classNames,
  ProgressBarProps,
  TextBox,
  useClassName,
  useVarianColor,
} from '../..';
import {Animated} from 'react-native';
import useAnimationProgress from '../../hook/useAnimationProgress';

const ProgressBar = ({
  value = 0,
  varian = 'primary',
  label,
  classBox,
  className,
  classLabel,
  classProgress,
  showLabel,
  renderLabel,
  ...rest
}: ProgressBarProps) => {
  const progress = useAnimationProgress({
    toValue: value,
    useNativeDriver: false,
  });

  const classVarian = useVarianColor({varian});
  const stylesProgress = useClassName(
    classNames('h-2 rounded', classVarian.bg, classProgress),
  );

  const renderCustomLabel = () => {
    if (renderLabel) {
      return renderLabel(value);
    }
    return (
      <TextBox
        className={classNames(
          'text-sm text-right',
          classVarian.text,
          classLabel,
        )}>
        {label ?? `${value}%`}
      </TextBox>
    );
  };

  return (
    <Box className={classNames('column gap-1', classBox)} {...rest}>
      {showLabel && renderCustomLabel()}
      <Box className={classNames('h-2 bg-gray-400 rounded', className)}>
        <Animated.View
          style={[
            stylesProgress,
            {
              width: progress.interpolate({
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

export default ProgressBar;
