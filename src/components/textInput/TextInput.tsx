import React from 'react';
import {classNames} from '../../utils';
import {Box, TextBox, TextInputBoxBase, TextInputBoxProps} from '../..';

export default function TextInputBox({
  leftContent,
  rightContent,
  classInput,
  classInputBase,
  classBox,
  classLabel,
  label,
  ...rest
}: TextInputBoxProps) {
  return (
    <Box className={classNames('column w-full gap-1', classBox)}>
      {label ? (
        <TextBox className={classNames('text-black', classLabel)}>
          {label}
        </TextBox>
      ) : null}
      <Box className={classNames('row-center border', classInput)}>
        {leftContent}
        <TextInputBoxBase
          className={classNames('text-black px-1 flex-1', classInputBase)}
          placeholder="Text input"
          {...rest}
        />
        {rightContent}
      </Box>
    </Box>
  );
}
