import {
  GestureResponderEvent,
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
import {ReactNode} from 'react';
import {TBook} from '@/core/types/data';

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
    banner_background: string;
  };
}

export interface IUserAccountRowProps {
  icon?: (style: StyleProp<TextStyle>) => ReactNode;
  right: string | ReactNode;
  left?: ReactNode | ((style: StyleProp<TextStyle>) => ReactNode);
  onPress: (e: GestureResponderEvent) => void;
  no_border?: boolean;
}
export type THomeBanner = {
  text: string[];
  image: any;
  button?: {text: string; onPress: Function};
};
export type TBannerProps = {
  banner: THomeBanner;
};

export type TCategoryChips = {text: string; link: string};
export interface ICategoriesChipsProps {
  containerProps?: ViewProps;
  textProps?: TextProps;
  data: TCategoryChips;
}

export type TBookSlider = {
  title: string;
  subtitle?: string;
  background?: {image: any; color: string};
  books: TBook[];
  showMore: Function;
};

export type TBookSliderItemProps = {
  book: TBook;
  isFirst: boolean;
  isLast: boolean;
  sliderType: 'simple' | 'complex';
};

export type TFlatListItem = {
  type: 'chips' | 'banner' | 'list';
  data: THomeBanner | TCategoryChips[] | TBookSlider;
};
