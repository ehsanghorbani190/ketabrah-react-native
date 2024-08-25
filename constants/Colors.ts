import {Theme} from '@react-navigation/native';

export const LightTheme: Theme = {
  dark: false,
  colors: {
    primary: '#5E9527',
    background: '#F9F9F9',
    card: '#F9F9F9',
    text: '#333',
    border: '#BDBDBD',
    notification: '#F9F9F9',
  },
};

export const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: '#4CAF50',
    background: '#121212',
    card: '#1E1E1E',
    text: '#FFFFFF',
    border: '#424242',
    notification: '#121212',
  },
};

export const CustomColors = {
  light: {},
  dark: {
    inactive_gray: '#999999',
  },
};
