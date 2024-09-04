import {IExtendedTheme, TBannerProps} from '@/core/types/ui';
import ThemedView from '@/components/ThemedView';
import ThemedText from '@/components/ThemedText';
import {Image} from 'expo-image';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

export default function Banner({banner}: TBannerProps) {
  const theme = useTheme() as IExtendedTheme;
  return (
    <View
      style={[
        {backgroundColor: theme.other_colors?.banner_background},
        styles.container,
      ]}
    >
      <Image source={banner.image} style={styles.image} />
      <View style={styles.textContainer}>
        {banner.text.map(text => (
          <ThemedText key={text} style={styles.text}>
            {text}
          </ThemedText>
        ))}
        {banner.button ? (
          <Pressable
            style={[{backgroundColor: theme.colors.background}, styles.button]}
            onPress={banner.button.onPress}
          >
            <ThemedText style={styles.buttonText}>
              {banner.button.text}
            </ThemedText>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 150,
    marginHorizontal: 15,
    marginTop: 25,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'space-between',
    flexDirection: 'row',
    elevation: 2,
    shadowColor: '#000',
  },
  image: {height: 150, width: 190},
  textContainer: {
    justifyContent: 'center',
    paddingRight: 15,
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'VazirBold',
    marginBottom: 5,
    fontSize: 16,
  },
  button: {
    alignSelf: 'flex-end',
    elevation: 3,
    shadowColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {fontSize: 13},
});
