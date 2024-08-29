import {
  PressableProps,
  StyleProp,
  TextInputProps,
  TextProps,
  TextStyle,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Theme} from '@react-navigation/native';

export interface IThemedButtonProps extends PressableProps {
  textStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  title: string;
}

export interface ITabBarLabelProps {
  text: string;
  color: string;
  focused: boolean;
}

export interface IStackScreenHeaderProps extends NativeStackHeaderProps {
  title: string;
  resetState?: Function;
}

export interface IInputWithLabelProps {
  input_props: TextInputProps;
  container_props?: ViewProps;
  label_props?: TextProps;
  label?: string;
  error_props?: TextProps;
  error?: null | string;
}
export interface IExtendedTheme extends Theme {
  other_colors?: {
    input_background: string;
    error: string;
    inactive_gray: string;
  };
}
