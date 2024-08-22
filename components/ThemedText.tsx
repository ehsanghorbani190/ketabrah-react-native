import {TextProps, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

export default function ThemedText(props: TextProps) {
  const theme = useTheme();
  const {children, ...rest} = props;
  return (
    <Text style={{color: theme.colors.text, fontFamily: 'Vazir'}} {...rest}>
      {children}
    </Text>
  );
}
