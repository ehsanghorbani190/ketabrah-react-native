import {FlatList, FlatListProps} from 'react-native';
import {TFlatListItem} from '@/core/types/ui';
import {useTheme} from '@react-navigation/native';

export default function ThemedFlatList({
  data,
  style,
  renderItem,
  ...rest
}: FlatListProps<TFlatListItem>) {
  const theme = useTheme();
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      style={[{backgroundColor: theme.colors.background}, style]}
      {...rest}
    />
  );
}
