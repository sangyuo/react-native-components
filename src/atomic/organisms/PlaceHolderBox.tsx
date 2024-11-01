import React from 'react';
import {Box} from '../atoms/Box';
import {classNames} from '../../utils';
import {PlaceholderBoxProps} from '../../model';
import PlaceHolderCard from '../molecules/PlaceholderCard';
import {Placeholder} from '../atoms';

export const PlaceholderBox = ({
  classContainer,
  length = 1,
  placeholderType,
  placeholderItem,
  animationType = 'opacity',
  disableAnimation = false,
  classShine,
}: PlaceholderBoxProps) => {
  const renderItem = () => {
    return Array.from({length}).map((_, index) => {
      if (placeholderType === 'card') {
        return (
          <PlaceHolderCard
            key={`placeholder-${index}`}
            animationType={animationType}
            classShine={classShine}
            {...placeholderItem}
          />
        );
      }
      return (
        <Placeholder
          key={`placeholder-${index}`}
          disableAnimation={disableAnimation}
          placeholderType={placeholderType}
          animationType={animationType}
          randomWidth={placeholderItem?.randomWidth}
          classShine={classShine}
          className={classNames(
            placeholderType === 'line' &&
              placeholderItem?.halfWidth &&
              index % 2 !== 0
              ? 'w-1/2'
              : '',
            placeholderType === 'line'
              ? placeholderItem?.classLine
              : placeholderItem?.classMedia,
          )}
        />
      );
    });
  };

  return (
    <Box className={classNames('column gap-3', classContainer)}>
      {renderItem()}
    </Box>
  );
};
