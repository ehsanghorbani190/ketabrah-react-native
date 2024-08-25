import {View, ViewProps} from 'react-native';
import {useTheme} from '@react-navigation/native';

export default function ThemedView({children, style, ...rest}: ViewProps) {
  const theme = useTheme();
  return (
    <View style={[{backgroundColor: theme.colors.background}, style]} {...rest}>
      {children}
    </View>
  );
}
