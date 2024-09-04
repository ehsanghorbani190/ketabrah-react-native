import {TBookSlider} from '@/core/types/ui';
import ThemedView from '@/components/ThemedView';
import ThemedScrollView from '@/components/ThemedScrollView';
import {Pressable, StyleSheet, View} from 'react-native';
import ThemedText from '@/components/ThemedText';
import {MaterialIcons} from '@expo/vector-icons';
import BookSliderItem from '@/components/home-page/BookSliderItem';
import {useTheme} from '@react-navigation/native';
import {Animated} from 'react-native';
import {useRef, useState} from 'react';

export default function ComplexBookSlider({data}: {data: TBookSlider}) {
  const theme = useTheme();
  const [scroll_left, setScrollLeft] = useState(0);
  const animationValue = useRef(new Animated.Value(0)).current;
  const animatedOpacityValue = animationValue.interpolate({
    inputRange: [scroll_left - 200, scroll_left],
    outputRange: [0.05, 1],
    extrapolate: 'clamp',
  });
  const animatedRightValue = animationValue.interpolate({
    inputRange: [scroll_left - 400, scroll_left],
    outputRange: [-2, 0],
    extrapolate: 'clamp',
  });
  return (
    <ThemedView
      style={[{backgroundColor: data.background?.color}, styles.container]}
    >
      <Animated.Image
        source={data.background?.image}
        style={[
          {opacity: animatedOpacityValue, right: animatedRightValue},
          styles.background,
        ]}
      />
      <View style={styles.topSection}>
        <Pressable style={styles.showMoreButton} onPress={data.showMore}>
          <MaterialIcons
            name={'chevron-left'}
            style={styles.showMoreButtonIcon}
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
        style={{backgroundColor: 'transparent'}}
        horizontal={true}
        contentContainerStyle={styles.bookSlider}
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
        onScroll={e => {
          if (scroll_left === 0) setScrollLeft(e.nativeEvent.contentOffset.x);
          animationValue.setValue(e.nativeEvent.contentOffset.x);
        }}
      >
        {data.books.map((book, index) => (
          <BookSliderItem
            book={book}
            key={book.title}
            isLast={index === 0}
            isFirst={index === data.books.length - 1}
            sliderType="complex"
          />
        ))}
      </ThemedScrollView>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingTop: 15,
    paddingBottom: 12.5,
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    bottom: 0,
    width: 155,
    height: 350,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15,
    paddingLeft: 10,
    paddingBottom: 20,
  },
  titleSection: {},
  title: {fontFamily: 'VazirBold', fontSize: 16, color: '#FFFFFF'},
  subtitle: {color: '#FFFFFF', fontSize: 13, marginTop: 5},
  showMoreButton: {flexDirection: 'row', alignItems: 'center'},
  showMoreButtonText: {
    verticalAlign: 'middle',
    lineHeight: 22,
    color: '#FFFFFF',
  },
  showMoreButtonIcon: {color: '#FFFFFF'},
  bookSlider: {justifyContent: 'flex-start'},
});
