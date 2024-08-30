import {StyleSheet, TextProps} from 'react-native';
import {useTheme} from '@react-navigation/native';
import ThemedText from '@/components/ThemedText';

export default function Badge({children, style, ...rest}: TextProps) {
  const theme = useTheme();
  return (
    <ThemedText
      style={[
        {
          backgroundColor: theme.colors.primary,
        },
        styles.badge,
        style,
      ]}
      {...rest}
    >
      {children}
    </ThemedText>
  );
}
const styles = StyleSheet.create({
  badge: {
    color: '#FFFFFF',
    borderRadius: 100,
    width: 25,
    height: 25,
    fontSize: 12,
    textAlign: 'center',
    verticalAlign: 'middle',
  },
});
