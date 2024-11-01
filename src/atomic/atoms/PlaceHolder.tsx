import React, {useMemo} from 'react';
import {AnimationBox} from './Box';
import {classNames, randomIndex} from '../../utils';
import {PlaceholderProps} from '../../model';
import useAnimationPlaceholder from '../../animations/useAnimationPlaceholder';

const styled = {
  line: 'h-3',
  media: 'w-12 h-12',
};

const widthRatios = [
  'w-full',
  'w-1/2',
  'w-1/3',
  'w-2/3',
  'w-1/4',
  'w-3/4',
  'w-1/5',
  'w-2/5',
  'w-3/5',
  'w-4/5',
];

export const Placeholder = ({
  className,
  placeholderType = 'line',
  randomWidth,
  animationType = 'opacity',
  disableAnimation = false,
  classShine,
  children,
}: PlaceholderProps) => {
  const animationStyled = useAnimationPlaceholder({
    animationType,
    useNativeDriver: animationType !== 'shine',
    disableAnimation,
    fromValue: disableAnimation ? 100 : 0,
  });
  const classWidthRandom = useMemo(
    () => (randomWidth ? widthRatios[randomIndex(widthRatios.length)] : ''),
    [randomWidth],
  );

  return (
    <AnimationBox
      style={animationType === 'opacity' ? animationStyled : undefined}
      className={classNames(
        'w-full bg-gray-400 relative',
        placeholderType !== 'none' ? styled[placeholderType] : '',
        classWidthRandom,
        className,
      )}>
      {animationType === 'shine' && (
        <AnimationBox
          style={animationStyled}
          className={classNames('bg-white h-full w-1/4 opacity-40', classShine)}
        />
      )}
      {children}
    </AnimationBox>
  );
};
