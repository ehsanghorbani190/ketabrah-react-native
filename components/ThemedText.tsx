import {TextProps, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

export default function ThemedText({children, style, ...rest}: TextProps) {
  const theme = useTheme();
  return (
    <Text
      style={[{color: theme.colors.text, fontFamily: 'Vazir'}, style]}
      {...rest}
    >
      {children}
    </Text>
  );
}
