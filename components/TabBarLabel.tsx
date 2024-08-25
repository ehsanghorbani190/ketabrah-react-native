import {ITabBarLabelProps} from '@/core/types/ui';
import {Text} from 'react-native';

export default function TabBarLabel(props: ITabBarLabelProps) {
  return (
    <Text
      style={{
        marginBottom: 3,
        fontFamily: props.focused ? 'VazirBold' : 'Vazir',
        color: props.color,
        fontSize: 12,
      }}
    >
      {props.text}
    </Text>
  );
}
