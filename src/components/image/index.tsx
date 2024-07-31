import React from 'react';
import {
  Image,
  ImageRequireSource,
  ImageStyle,
  StyleProp,
  StyleSheet,
} from 'react-native';
import {useClassName} from '../../hook';
import {ImageType} from '../../model';
import FastImage, {ResizeMode, Source} from 'react-native-fast-image';
import {classNames} from '../../utils';

interface Props {
  source: ImageRequireSource | Source;
  className: string;
  imageType?: ImageType;
  style?: StyleProp<ImageStyle>;
  resizeMode?: ImageStyle['resizeMode'];
}
function ImageComponent({
  className,
  imageType,
  source,
  style,
  resizeMode,
}: Props) {
  const stylesCustom = useClassName(classNames('w-full h-full', className));
  const styleCard: StyleProp<ImageStyle> = StyleSheet.compose(
    stylesCustom,
    style,
  );

  if (imageType === ImageType.FastImage) {
    return (
      <FastImage
        style={styleCard as never}
        source={source}
        resizeMode={resizeMode as ResizeMode}
      />
    );
  }

  return (
    <Image
      style={styleCard}
      source={source as ImageRequireSource}
      resizeMode={resizeMode}
    />
  );
}
ImageComponent.defaultProps = {
  className: '',
  imageType: ImageType.Image,
  resizeMode: 'contain',
};
export default ImageComponent;
