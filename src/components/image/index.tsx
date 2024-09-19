import React from 'react';
import {Image, ImageStyle, StyleProp, StyleSheet} from 'react-native';
import {useClassName} from '../../hook';
import {ImageBoxProps, ImageModuleType} from '../../model';
import {classNames} from '../../utils';
import useLoadModuleFastImage from '../../hook/useLoadModuleFastImage';

function ImageComponent({
  className,
  imageModuleType,
  source,
  style,
  resizeMode,
}: ImageBoxProps) {
  const stylesCustom = useClassName(classNames('w-full h-full', className));
  const styleCard: StyleProp<ImageStyle> = StyleSheet.compose(
    stylesCustom,
    style,
  );

  const FastImage: any = useLoadModuleFastImage(imageModuleType);

  if (FastImage) {
    return (
      <FastImage style={styleCard} source={source} resizeMode={resizeMode} />
    );
  }

  return <Image style={styleCard} source={source} resizeMode={resizeMode} />;
}
ImageComponent.defaultProps = {
  className: '',
  imageType: ImageModuleType.Image,
  resizeMode: 'contain',
};
export default ImageComponent;
