import {StyleSheet, TextProps} from 'react-native';
import ThemedView from '@/components/ThemedView';
import ThemedText from '@/components/ThemedText';
import {FontAwesome6} from '@expo/vector-icons';
import {useTheme} from '@react-navigation/native';
import {ICategoriesChipsProps} from '@/core/types/ui';

export default function Chips(props: ICategoriesChipsProps) {
  const theme = useTheme();
  const {data, containerProps, textProps} = props;
  const {style: container_style, ...rest_container_props} =
    containerProps || {};
  const {style: text_style, ...rest_text_props} = textProps || {};
  return (
    <ThemedView
      style={[
        {borderColor: theme.dark ? '#333' : '#ddd'},
        styles.container,
        containerProps ? container_style : {},
      ]}
      {...(containerProps ? rest_container_props : {})}
    >
      <FontAwesome6
        size={20}
        name={'chevron-left'}
        style={{color: theme.dark ? '#333' : '#ddd', marginRight: 5}}
      />
      <ThemedText
        style={[
          {color: theme.colors.primary},
          styles.text,
          textProps ? text_style : {},
        ]}
        {...(textProps ? rest_text_props : {})}
      >
        {data.text}
      </ThemedText>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 46,
    flexDirection: 'row',
    flex: 0,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 8,
  },
  text: {fontFamily: 'VazirBold'},
});
