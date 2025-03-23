import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import CssStyle from '../../StyleSheet/CssStyle';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const OnBoardingScreen = ({navigation}: any) => {
  //const navigation=useNavigation();
  const handleDone = () => {
    navigation.navigate('Welcome');
  };
  const doneButton = ({...props}) => {
    return (
      <View style={{padding:0}}>
      <TouchableOpacity style={styles.btnDone} {...props}>
        <Text style={{color:'black'}}>Done</Text>
      </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={CssStyle.styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent={doneButton}
       // bottomBarHighlight={false}
        containerStyles={{paddingHorizontal:15}}
        pages={[
          {
            backgroundColor: '#a7f3d0',
            image: (
              <View style={styles.lottile}>
                <LottieView
                  source={require('../../assets/welcomlogo.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Welcome to InFynBusiness',
            subtitle:
              'Discover movies, savor delicious food, and connect with friends all in one place.',
          },
          {
            backgroundColor: '#fef3c7',
            image: (
              <View style={styles.lottile}>
                <LottieView
                  source={require('../../assets/moviesLotile.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Find Movies You'll Love",
            subtitle:
              'Explore a vast collection of movies, from the latest blockbusters to timeless classics',
          },
          {
            backgroundColor: '#a78bfa',
            image: (
              <View style={styles.lottile}>
                <LottieView
                  source={require('../../assets/foodie.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Satisfy Your Cravings',
            subtitle:
              'Browse through a variety of delicious food options, from local delights to global cuisines.',
          },

          {
            backgroundColor: '#00d4ff',
            image: (
              <View style={styles.lottile}>
                <LottieView
                  source={require('../../assets/chatlotile.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Connect with Friends',
            subtitle:
              'Chat about your favorite movies, food, and more with friends and communities.',
          },
        ]}
      />
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  lottile: {
    width: width * 0.9,
    height: width,
    aspectRatio: 1,
  },
  btnDone: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomStartRadius:50,
    borderStartStartRadius:50
  },
});
