import React, { useRef, useState } from 'react';
import { View, Image, Dimensions, StyleSheet, SafeAreaView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width: viewportWidth } = Dimensions.get('window');

const imageAssets = [
    require('../assets/foodbanner.jpg'),
    require('../assets/moviebanner.jpg'),
    require('../assets/chatingbanner.jpg'),


];

const ImageSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<Carousel<number>>(null);

  const renderItem = ({ item }: { item: number }) => (
    <View style={styles.slide}>
      <Image source={item} style={styles.image} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={imageAssets}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        loop={true}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={3000}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={imageAssets.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: viewportWidth,
    height: viewportWidth * 0.6,
    resizeMode: 'cover',
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
  },
});

export default ImageSlider;
