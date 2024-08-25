import {PressableProps, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

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
}
