import {ScrollView, ScrollViewProps} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useEffect, useRef} from 'react';

export default function ThemedScrollView({
  children,
  style,
  contentContainerStyle,
  ...rest
}: ScrollViewProps) {
  const ref = useRef<ScrollView | null>(null);
  const theme = useTheme();
  useEffect(() => {
    if (ref.current && rest.horizontal) {
      ref.current.scrollToEnd({animated: false});
    }
  }, []);
  return (
    <ScrollView
      ref={ref}
      contentContainerStyle={contentContainerStyle}
      style={[{backgroundColor: theme.colors.background}, style]}
      {...rest}
    >
      {children}
    </ScrollView>
  );
}
