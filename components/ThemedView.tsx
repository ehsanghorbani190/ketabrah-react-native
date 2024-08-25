import {View, ViewProps} from 'react-native';
import {useTheme} from '@react-navigation/native';

export default function ThemedView({children, ...rest}: ViewProps) {
  const theme = useTheme();
  return (
    <View style={{backgroundColor: theme.colors.background}}>{children}</View>
  );
}
