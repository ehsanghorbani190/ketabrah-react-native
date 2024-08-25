import {useTheme} from '@react-navigation/native';
import {IThemedButtonProps} from '@/core/types/ui';
import {Pressable, StyleSheet} from 'react-native';
import ThemedText from '@/components/ThemedText';

export default function ThemedButton({
  title,
  buttonStyle,
  textStyle,
  ...restProps
}: IThemedButtonProps) {
  const theme = useTheme();
  return (
    <Pressable
      style={[
        {
          backgroundColor: theme.colors.primary,
          borderColor: theme.colors.border,
        },
        styles.container,
        buttonStyle,
      ]}
      {...restProps}
    >
      <ThemedText style={textStyle}>{title}</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 75,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
});
