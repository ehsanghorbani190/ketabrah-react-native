import {TBookSlider} from '@/core/types/ui';
import ThemedView from '@/components/ThemedView';
import ThemedScrollView from '@/components/ThemedScrollView';
import {Pressable, StyleSheet, View} from 'react-native';
import ThemedText from '@/components/ThemedText';
import {MaterialIcons} from '@expo/vector-icons';
import BookSliderItem from '@/components/home-page/BookSliderItem';
import {useTheme} from '@react-navigation/native';

export default function SimpleBookSlider({data}: {data: TBookSlider}) {
  const theme = useTheme();
  return (
    <ThemedView style={styles.container}>
      <View style={styles.topSection}>
        <Pressable style={styles.showMoreButton} onPress={data.showMore}>
          <MaterialIcons
            name={'chevron-left'}
            style={[{color: theme.colors.text}, styles.showMoreButtonIcon]}
            size={18}
          />
          <ThemedText style={styles.showMoreButtonText}>مشاهده همه</ThemedText>
        </Pressable>
        <View style={styles.titleSection}>
          <ThemedText style={styles.title}>{data.title}</ThemedText>
          {data.subtitle ? (
            <ThemedText style={styles.subtitle}>{data.subtitle}</ThemedText>
          ) : null}
        </View>
      </View>
      <ThemedScrollView
        horizontal={true}
        contentContainerStyle={styles.bookSlider}
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
      >
        {data.books.map((book, index) => (
          <BookSliderItem
            book={book}
            key={book.title}
            isLast={index === 0}
            isFirst={index === data.books.length - 1}
          />
        ))}
      </ThemedScrollView>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {marginTop: 45},
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15,
    paddingLeft: 10,
    paddingBottom: 20,
  },
  titleSection: {},
  title: {fontFamily: 'VazirBold', fontSize: 16},
  subtitle: {},
  showMoreButton: {flexDirection: 'row', alignItems: 'center'},
  showMoreButtonText: {
    verticalAlign: 'middle',
    lineHeight: 22,
  },
  showMoreButtonIcon: {},
  bookSlider: {justifyContent: 'flex-start'},
});
