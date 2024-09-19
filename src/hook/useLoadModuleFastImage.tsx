import React, {useEffect, useState} from 'react';
import {ImageModuleType} from '../model';

export default function useLoadModuleFastImage(
  imageModuleType?: ImageModuleType,
) {
  const [FastImage, setFastImage] = useState<React.ReactNode>(null);

  useEffect(() => {
    if (imageModuleType === ImageModuleType.FastImage) {
      const loadFastImage = async () => {
        try {
          const {default: FastImageModule} =
            await require('@d11/react-native-fast-image');
          setFastImage(FastImageModule);
        } catch (error) {}
      };
      loadFastImage();
    }
  }, [imageModuleType]);

  return FastImage;
}
