import React from 'react';
import {classNames} from '../../utils';
import {AnimationPlaceholderType, PlaceholderBaseProps} from '../../model';
import {PlaceholderBox} from '../organisms';
import {Placeholder} from '../atoms';

const PlaceholderCard = ({
  classCard,
  classMedia,
  classLine,
  numberLine = 2,
  animationType = 'opacity',
  classContainerLine,
  randomWidth = false,
  halfWidth = true,
  classShine,
}: PlaceholderBaseProps & AnimationPlaceholderType) => {
  return (
    <Placeholder
      animationType={animationType}
      className={classNames(
        'row h-auto item-start gap-3 bg-transparent',
        classCard,
      )}
      classShine={classShine}>
      <Placeholder
        disableAnimation
        placeholderType="media"
        className={classMedia}
      />
      <PlaceholderBox
        disableAnimation
        placeholderType="line"
        length={numberLine}
        placeholderItem={{
          halfWidth,
          numberLine,
          classLine,
          randomWidth,
        }}
        classContainer={classNames('flex-1', classContainerLine)}
      />
    </Placeholder>
  );
};

export default PlaceholderCard;
