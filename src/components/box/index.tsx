import {Text as TextNative, TextProps, View, ViewProps} from 'react-native';
import {withElementBox} from '../../hoc';

export const Box = withElementBox<ViewProps>(View);
export const Text = withElementBox<TextProps>(TextNative);
