import ThemedFlatList from '@/components/ThemedFlatList';
import {homeItemRenderer} from '@/core/helpers/homeItemRenderer';
import {home_items} from '@/core/constants';

export default function HomeScreen() {
  return <ThemedFlatList data={home_items} renderItem={homeItemRenderer} />;
}
