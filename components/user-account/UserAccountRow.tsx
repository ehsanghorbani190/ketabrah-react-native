import {IUserAccountRowProps} from '@/core/types/ui';
import {Pressable, StyleSheet} from 'react-native';
import ThemedView from '@/components/ThemedView';
import {FontAwesome6} from '@expo/vector-icons';
import {useTheme} from '@react-navigation/native';
import ThemedText from '@/components/ThemedText';

export default function UserAccountRow({
  icon,
  right,
  left,
  onPress,
  no_border = false,
}: IUserAccountRowProps) {
  const theme = useTheme();
  return (
    <Pressable
      style={[
        {
          borderColor: theme.dark ? '#333' : '#ddd',
          borderBottomWidth: no_border ? 0 : 1,
        },
        styles.container,
      ]}
      onPress={onPress}
    >
      <ThemedView style={styles.left_container}>
        <FontAwesome6
          size={20}
          name={'chevron-left'}
          style={{color: theme.dark ? '#333' : '#ddd', marginRight: 15}}
        />
        {typeof left === 'function' ? left?.({}) : left}
      </ThemedView>
      <ThemedView style={styles.right_container}>
        {typeof right === 'string' ? <ThemedText>{right}</ThemedText> : right}
        {icon?.([{color: theme.colors.primary}, styles.icon])}
      </ThemedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 61,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingHorizontal: 5,
  },
  right_container: {flexDirection: 'row', alignItems: 'center'},
  icon: {marginLeft: 15},
  left_container: {flexDirection: 'row', alignItems: 'center'},
});
