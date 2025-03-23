import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  Dimensions,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Colors from '../CommonClass/ColorCode';
import LottieView from 'lottie-react-native';
import {useSharedValue, withSpring} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const FoodSplashScreen = () => {
  const {width, height} = Dimensions.get('window');
  const slide = useRef(new Animated.Value(200)).current;
const navigation :any=useNavigation();
  useEffect(() => {
    Animated.timing(slide, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [slide]);

  useEffect(() => {
    setTimeout(
     ()=>navigation.navigate('FoodHomeScreen'),2000
    );
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centerContent}>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle}>
            <LottieView
              source={require('../assets/foodloader.json')}
              loop
              autoPlay
              style={styles.lottie}
            />
          </View>
        </View>
        <Animated.View style={{transform: [{translateY: slide}]}}>
          <Text style={styles.text2}>Foodiee</Text>
          <Text style={styles.text}>Food is Always Right</Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default FoodSplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerCircle: {
    width: 290,
    height: 290,
    borderRadius: 130,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  innerCircle: {
    width: 230,
    height: 230,
    borderRadius: 115,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: '100%',
  },
  text: {
    color: '#131842',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
    textAlign: 'center',

    textShadowColor: '#e2e2e2',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 3,
  },
  text2: {
    color: '#131842',
    fontSize: 38,
    fontWeight: '600',
    marginTop: 20,
    textAlign: 'center',
    textShadowColor: '#e2e2e2',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 3,
  },
});
