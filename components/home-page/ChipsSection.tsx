import ThemedScrollView from '@/components/ThemedScrollView';
import {TCategoryChips} from '@/core/types/ui';
import Chips from '@/components/home-page/Chips';

export default function ChipsSection({chips}: {chips: TCategoryChips[]}) {
  return (
    <ThemedScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      overScrollMode="never"
      style={{marginTop: 25}}
    >
      {chips.map((data, index) => (
        <Chips
          key={index}
          containerProps={{
            style: {
              marginRight: index === chips.length - 1 ? 15 : 5,
              marginLeft: index === 0 ? 15 : 5,
            },
          }}
          data={data}
        />
      ))}
    </ThemedScrollView>
  );
}
