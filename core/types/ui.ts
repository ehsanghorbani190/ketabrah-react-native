import {PressableProps, StyleProp, TextStyle, ViewStyle} from 'react-native';

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
