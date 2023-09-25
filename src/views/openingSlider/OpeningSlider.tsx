// React
import {View, Text, Image} from 'react-native';

// Carousel
import Carousel, {Pagination} from 'react-native-snap-carousel';

// Paper
import {Button} from 'react-native-paper';

// Style
import {styles} from './openingSlider.style';
import {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const OpeningSlider = ({navigation}: any) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);

  const sliderData = [
    {
      slideImage: require('../../assets/images/parking-car.jpg'),
      title: 'Park Edilen Yeri Unutmaya Son',
      desc: 'Konum işaretleme özelliği ile aracınızı park ettiğiniz yerin konumunu işaretleyebilir, daha sonrasında haritadan aracıma git diyerek aracınızı kısa sürede bulabilirsiniz.',
      button: 'Atla',
    },
    {
      slideImage: require('../../assets/images/parking-car.jpg'),
      title: 'Park Edilen Yeri Unutmaya Son',
      desc: 'Konum işaretleme özelliği ile aracınızı park ettiğiniz yerin konumunu işaretleyebilir, daha sonrasında haritadan aracıma git diyerek aracınızı kısa sürede bulabilirsiniz.',
      button: 'Atla',
    },
    {
      slideImage: require('../../assets/images/parking-car.jpg'),
      title: 'Park Edilen Yeri Unutmaya Son',
      desc: 'Konum işaretleme özelliği ile aracınızı park ettiğiniz yerin konumunu işaretleyebilir, daha sonrasında haritadan aracıma git diyerek aracınızı kısa sürede bulabilirsiniz.',
      button: 'Haydi Başlayalım',
    },
  ];

  const handleSlider = () => {
    navigation.navigate('Login');
  };

  const renderItem = ({item}: any) => (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.slideContainer}>
          <Image source={item.slideImage} style={styles.slideImage} />
          <Text style={styles.slideText}>{item.title}</Text>
          <Text style={styles.slideDesc}>{item.desc} </Text>
        </View>
        <View style={styles.slideButtonContainer}>
          <Button
            contentStyle={styles.buttonContentStyle}
            icon={{
              uri: 'https://icon-library.com/images/arrow-icon-white/arrow-icon-white-29.jpg',
            }}
            style={styles.slideButton}
            mode="contained"
            onPress={handleSlider}></Button>
          <Text style={styles.slideButtonText}>{item.button}</Text>
        </View>
      </View>
    </SafeAreaView>
  );

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={sliderData}
        renderItem={renderItem}
        onSnapToItem={index => setActiveSlide(index)}
        sliderWidth={500}
        itemWidth={400}
      />
      <Pagination
        dotsLength={sliderData.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.inactivePaginationDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default OpeningSlider;
