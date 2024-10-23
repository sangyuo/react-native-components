import {
  Pressable,
  PressableProps,
  TouchableHighlight,
  TouchableHighlightProps,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
} from 'react-native';
import {withButtonBox} from '../../hoc';

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
