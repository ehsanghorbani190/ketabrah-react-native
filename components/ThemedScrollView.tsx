import {ScrollView, ScrollViewProps} from 'react-native';
import {useTheme} from '@react-navigation/native';

export default function ThemedScrollView({
  children,
  style,
  ...rest
}: ScrollViewProps) {
  const theme = useTheme();
  return (
    <ScrollView
      style={[{backgroundColor: theme.colors.background}, style]}
      {...rest}
    >
      {children}
    </ScrollView>
  );
}
