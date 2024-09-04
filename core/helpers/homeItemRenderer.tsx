import {ListRenderItem} from 'react-native';
import {
  TBookSlider,
  TCategoryChips,
  TFlatListItem,
  THomeBanner,
} from '@/core/types/ui';
import ChipsSection from '@/components/home-page/ChipsSection';
import Banner from '@/components/home-page/Banner';
import SimpleBookSlider from '@/components/home-page/SimpleBookSlider';

export const homeItemRenderer: ListRenderItem<TFlatListItem> = ({item}) => {
  const {type, data} = item;
  switch (type) {
    case 'chips':
      return <ChipsSection chips={data as TCategoryChips[]} />;
    case 'banner':
      return <Banner banner={data as THomeBanner} />;
    case 'list':
      return (data as TBookSlider).background ? null : (
        <SimpleBookSlider data={data as TBookSlider} />
      );
  }
  return null;
};
