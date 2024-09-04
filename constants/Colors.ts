import {IExtendedTheme} from '@/core/types/ui';

export const LightTheme: IExtendedTheme = {
  dark: false,
  colors: {
    primary: '#5E9527',
    background: '#F9F9F9',
    card: '#F9F9F9',
    text: '#333',
    border: '#BDBDBD',
    notification: '#F9F9F9',
  },
  other_colors: {
    input_background: '#dddddd',
    error: '#FF3F34',
    inactive_gray: '#333333',
    banner_background: '#1F844C',
  },
};

export const DarkTheme: IExtendedTheme = {
  dark: true,
  colors: {
    primary: '#4CAF50',
    background: '#121212',
    card: '#1E1E1E',
    text: '#FFFFFF',
    border: '#424242',
    notification: '#121212',
  },
  other_colors: {
    input_background: '#333333',
    inactive_gray: '#999999',
    error: '#FF5E57',
    banner_background: '#1F844C',
  },
};
