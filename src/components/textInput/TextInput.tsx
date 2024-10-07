import React from 'react';
import {TextInput} from 'react-native';
import Box from '../box';
import {classNames} from '../../utils';
import {Text, TextInputBoxProps, useClassName} from '../..';

export default function TextInputBox({
  leftContent,
  rightContent,
  classInput,
  classInputBase,
  classBox,
  classLabel,
  label,
  style,
  ...rest
}: TextInputBoxProps) {
  const stylesClassInputBase = useClassName(
    classNames('text-black px-1 flex-1', classInputBase),
  );

  return (
    <Box className={classNames('column w-full gap-1', classBox)}>
      {label ? (
        <Text className={classNames('text-black', classLabel)}>{label}</Text>
      ) : null}
      <Box className={classNames('row-center border', classInput)}>
        {leftContent}
        <TextInput
          style={[stylesClassInputBase, style]}
          placeholder="Text input"
          {...rest}
        />
        {rightContent}
      </Box>
    </Box>
  );
}
