import {Theme} from '@react-navigation/native';

export const LightTheme: Theme = {
  dark: false,
  colors: {
    primary: '#79AC78',
    background: '#FFFFFF',
    card: '#F6F6F6',
    text: '#000',
    border: '#808080',
    notification: '#FFFFFF',
  },
};

export const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: '#A7D397',
    background: '#353B48',
    card: '#2F3640',
    text: '#F5F6FA',
    border: '#DCDDE1',
    notification: '#353B48',
  },
};
