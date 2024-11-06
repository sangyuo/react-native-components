import {
  ImageBackground,
  ImageBackgroundProps,
  TextInput,
  TextInputProps,
  Text,
  TextProps,
  View,
  ViewProps,
  TouchableOpacityProps,
  TouchableOpacity,
  TouchableHighlightProps,
  TouchableHighlight,
  TouchableNativeFeedbackProps,
  TouchableNativeFeedback,
  TouchableWithoutFeedbackProps,
  TouchableWithoutFeedback,
  PressableProps,
  Pressable,
  Animated,
} from 'react-native';
import {withButtonBox, withElementBox} from '../../hoc';

export const Box = withElementBox<ViewProps, View>(View);
export const AnimationBox = withElementBox<ViewProps, typeof Animated.View>(
  Animated.View,
);
export const TextBox = withElementBox<TextProps, Text>(Text);
export const TextInputBoxBase = withElementBox<TextInputProps, TextInput>(
  TextInput,
);
export const ImageBackgroundBox = withElementBox<
  ImageBackgroundProps,
  ImageBackground
>(ImageBackground);

export const ButtonBox = withButtonBox<
  TouchableOpacityProps,
  typeof TouchableOpacity
>(TouchableOpacity);

export const ButtonHighlightBox = withButtonBox<
  TouchableHighlightProps,
  typeof TouchableHighlight
>(TouchableHighlight);

export const ButtonNativeFeedbackBox = withButtonBox<
  TouchableNativeFeedbackProps,
  TouchableNativeFeedback
>(TouchableNativeFeedback);

export const ButtonWithoutFeedbackBox = withButtonBox<
  TouchableWithoutFeedbackProps,
  TouchableWithoutFeedback
>(TouchableWithoutFeedback);

export const PressableBox = withButtonBox<PressableProps, View>(Pressable);
