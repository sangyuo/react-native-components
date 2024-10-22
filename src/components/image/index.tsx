import React from 'react';
import {Image} from 'react-native';
import {useClassName} from '../../hook';
import {ImageBoxProps, ImageModuleType} from '../../model';
import {classNames, isNumber} from '../../utils';
import useLoadModuleFastImage from '../../hook/useLoadModuleFastImage';
import {SvgUri} from 'react-native-svg';
import {Box} from '../..';

function ImageComponent({
  className,
  imageModuleType = ImageModuleType.Image,
  source,
  style,
  resizeMode = 'contain',
}: ImageBoxProps) {
  const stylesCustom = useClassName(classNames('w-full h-full', className));
  const FastImage: any = useLoadModuleFastImage(imageModuleType);

  if (
    imageModuleType === ImageModuleType.SvgUri &&
    !isNumber(source) &&
    !Array.isArray(source) &&
    source?.uri
  ) {
    return (
      <Box style={[stylesCustom, style]}>
        <SvgUri uri={source?.uri} />
      </Box>
    );
  }

  const ImageModule = FastImage || Image;

  return (
    <ImageModule
      style={[stylesCustom, style]}
      source={source}
      resizeMode={resizeMode}
    />
  );
}

export default ImageComponent;
