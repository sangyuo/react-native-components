import {
  ImageBackground,
  ImageBackgroundProps,
  TextInput,
  TextInputProps,
  Text,
  TextProps,
  View,
  ViewProps,
} from 'react-native';
import {withElementBox} from '../../hoc';

export const Box = withElementBox<ViewProps, View>(View);
export const TextBox = withElementBox<TextProps, Text>(Text);
export const TextInputBoxBase = withElementBox<TextInputProps, TextInput>(
  TextInput,
);
export const ImageBackgroundBox = withElementBox<
  ImageBackgroundProps,
  ImageBackground
>(ImageBackground);
