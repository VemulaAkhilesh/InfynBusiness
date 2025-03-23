import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  Animated,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import LottieView from 'lottie-react-native';

const {width, height} = Dimensions.get('window');

const WelcomeScreen = ({navigation}: any) => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.9,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.textLetsGetStart}>Let's Get Started</Text>
        <LottieView
          style={styles.lottieImg}
          source={require('../assets/RegisterLottie.json')}
          autoPlay
          loop
        />
        <View style={styles.buttonContainer}>
          <Animated.View style={{transform: [{scale: scaleValue}]}}>
            <TouchableOpacity
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              style={styles.button}>
              <Text style={styles.buttonText}>Go to Signup</Text>
            </TouchableOpacity>
          </Animated.View>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an Account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
              <Text style={styles.loginButton}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,backgroundColor:'#91edff'
  },
  lottieImg: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 50, // Optional padding for additional spacing
  },
  textLetsGetStart: {
    color: 'black',
    fontSize: 35,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: '20%',
  },
  button: {
    backgroundColor: '#1b5db3',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 16,
    color: 'black',
  },
  loginButton: {
    fontSize: 16,
    color: '#232d5e',
    fontWeight: 'bold',
  },
});
