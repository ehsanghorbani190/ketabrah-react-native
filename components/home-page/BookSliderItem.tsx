import {TBook, TBookSliderItemProps} from '@/core/types/ui';
import ThemedView from '@/components/ThemedView';
import {StyleSheet, View} from 'react-native';
import ThemedText from '@/components/ThemedText';
import {MaterialCommunityIcons, SimpleLineIcons} from '@expo/vector-icons';
import {Image} from 'expo-image';
import {convertToPersianDigits} from '@/core/helpers/numberConverter';
import {useTheme} from '@react-navigation/native';

export default function BookSliderItem({
  book,
  isFirst = false,
  isLast = false,
  sliderType = 'simple',
}: TBookSliderItemProps) {
  const theme = useTheme();
  return (
    <ThemedView
      style={[
        {
          marginRight: isFirst ? (sliderType === 'complex' ? 190 : 15) : 10,
          marginLeft: isLast ? 15 : 10,
        },
        styles.container,
      ]}
    >
      <View style={styles.imageContainer}>
        <Image source={book.image} style={styles.image} />
        {book.off ? (
          <ThemedText style={styles.offBadge}>
            {convertToPersianDigits(`${book.off}`)}٪
          </ThemedText>
        ) : null}
        {book.type === 'audio' ? (
          <SimpleLineIcons
            name={'earphones'}
            size={20}
            style={[
              {
                color: theme.colors.text,
                backgroundColor: theme.colors.background,
              },
              styles.audioBadge,
            ]}
          />
        ) : null}
      </View>
      <View style={styles.infoContainer}>
        <ThemedText
          style={[sliderType === 'complex' && {color: '#FFFFFF'}, styles.title]}
          numberOfLines={1}
        >
          {book.title}
        </ThemedText>
        <View style={styles.subInfoContainer}>
          <ThemedText
            style={[
              sliderType === 'complex' && {color: '#FFFFFF'},
              styles.price,
            ]}
          >
            {convertToPersianDigits(
              `${book.off ? (book.price * (100 - book.off)) / 100 : book.price}`
            )}{' '}
            ت
          </ThemedText>
          {book.off ? (
            <ThemedText style={styles.originalPrice}>
              {convertToPersianDigits(`${book.price}`)}
            </ThemedText>
          ) : book.rate ? (
            <ThemedView style={styles.rateContainer}>
              <ThemedText
                style={[
                  sliderType === 'complex' && {color: '#FFFFFF'},
                  styles.rateText,
                ]}
              >
                {convertToPersianDigits(`${book.rate}`)}
              </ThemedText>
              <MaterialCommunityIcons
                name={'star'}
                style={[
                  sliderType === 'complex' && {color: '#FFFFFF'},
                  styles.rateIcon,
                ]}
                size={12}
              />
            </ThemedView>
          ) : null}
        </View>
      </View>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {backgroundColor: 'transparent'},
  imageContainer: {
    overflow: 'hidden',
    borderRadius: 10,
    elevation: 2,
  },
  image: {width: 125, height: 175},
  offBadge: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#9d0300',
    color: '#FFFFFF',
    width: 35,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    textAlign: 'center',
    fontSize: 12,
  },
  audioBadge: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    padding: 5,
    borderRadius: 5,
  },
  infoContainer: {},
  title: {paddingTop: 7.5, maxWidth: 125},
  subInfoContainer: {
    paddingTop: 7.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#909090',
    fontSize: 12,
  },
  rateContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rateText: {fontSize: 12},
  rateIcon: {marginRight: 2},
  price: {paddingRight: 5, fontSize: 12},
});
