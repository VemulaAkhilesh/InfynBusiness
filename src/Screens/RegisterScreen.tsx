import {
  Alert,
  Animated,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {translate} from '@shopify/react-native-skia';
import LottieView from 'lottie-react-native';
import CssStyle from '../StyleSheet/CssStyle';
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth';
import {auth} from '../CommonClass/FireBaseHelper';
const RegisterScreen = ({navigation}: any) => {
  const slideAnim = useRef(new Animated.Value(-50)).current;
  const slideAnimUp = useRef(new Animated.Value(1000)).current;
  const [passwordVisible, setpasswordVisible] = useState(false);
  const [userName, setUserNmae] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [mail, setMail] = useState('');
  const [ismailValid, setIsMailValid] = useState(false);

  const [password, setPassword] = useState('');
  const [isPasswordIsValid, setIsPasswordIsValid] = useState(false);
  const [loader,setLoader]=useState(false);

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);
  useEffect(() => {
    Animated.timing(slideAnimUp, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [slideAnimUp]);

  const validateUsername = (input: string) => {
    if (input.length >= 4) {
      setIsUsernameValid(true);
    } else {
      setIsUsernameValid(false);
    }
  };

  const validateMail = (input: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(input)) {
      setIsMailValid(true);
    } else {
      setIsMailValid(false);
    }
  };
  const validatePassword = (input: string) => {
    if (input.length >= 6) {
      setIsPasswordIsValid(true);
    } else {
      setIsPasswordIsValid(false);
    }
  };

  const toSingup = async () => {
    if (userName === '') {
      Alert.alert('Please enter username');
      return;
    } else if (!isUsernameValid) {
      Alert.alert('Please enter valid username.');
      return;
    }

    if (mail === '') {
      Alert.alert('Please enter email address');
      return;
    } else if (!ismailValid) {
      Alert.alert('Please enter a valid email address.');
      return;
    }
    if (password === '') {
      Alert.alert('Please enter password');
      return;
    } else if (!isPasswordIsValid) {
      Alert.alert('Password must be at least 6 characters long.');
      return;
    }
    setLoader(true);
    try {
     const response= await createUserWithEmailAndPassword(auth, mail, password);
     console.log("akhilesh",response)
     const user = response.user;
     await sendEmailVerification(user);
     console.log("Verification email sent to:", user.email);
     Alert.alert("Registration successful! Please check your email for verification.");
     setMail('');
     setLoader(false);
     setUserNmae('');
     setPassword('');
     setIsUsernameValid(false)
     setIsMailValid(false)
     if(response!=null){
     // navigation.navigate('Login')
     }else{
      setMail('');
      setUserNmae('');
      setPassword('');
      setIsUsernameValid(false)
      setIsMailValid(false)
      Alert.alert('not used registered')
     }
   
    } catch (err) {
      setMail('');
      setUserNmae('');
      setPassword('');
      setLoader(false);
      setIsUsernameValid(false)
      setIsMailValid(false)
      console.log('got', err);
    }

   
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View style={CssStyle.styles.RegisterContaine}>
        <SafeAreaView>
          <ScrollView>
            <View style={CssStyle.styles.Register_mainContainer}>
              <Animated.View style={{transform: [{translateX: slideAnim}]}}>
                <TouchableOpacity
                  style={CssStyle.styles.register_back_icon}
                  onPress={() => navigation.goBack()}>
                  <Icon name="arrow-back-outline" size={25} color="#900" />
                </TouchableOpacity>
              </Animated.View>

              {/* <Animated.View style={{transform: [{translateY: slideAnim}]}}> */}
              {/* <Text style={styles.RegisterText_hello}>Hello !</Text> */}
              {/* </Animated.View> */}
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <LottieView
                style={CssStyle.styles.lottieImg}
                source={require('../assets/singup_lottile.json')}
                autoPlay
                loop
              />
            </View>
            <Animated.View
              style={[
                CssStyle.styles.animatedView,
                {transform: [{translateY: slideAnimUp}]},
              ]}>
              <View style={CssStyle.styles.registerFormContaine}>
                <View style={CssStyle.styles.register_textInput_container}>
                  <View style={styles.register_textinputminiContainer}>
                    <Icon name="person-outline" size={25} color="#900" />
                    <TextInput
                      placeholder="Enter Username"
                      style={CssStyle.styles.register_textInput}
                      value={userName}
                      placeholderTextColor={'#a3a2a2'}
                      onChangeText={text => {
                        setUserNmae(text);
                        validateUsername(text);
                      }}
                    />

                    {isUsernameValid && (
                      <Icon
                        name="checkmark-done-circle-outline"
                        size={25}
                        color="green"
                      />
                    )}
                  </View>
                </View>
                <View style={CssStyle.styles.register_textInput_container}>
                  <View style={CssStyle.styles.register_textinputminiContainer}>
                    <Icon name="mail-outline" size={25} color="#900" />
                    <TextInput
                      placeholder="Enter Email"
                      style={CssStyle.styles.register_textInput}
                      value={mail}
                      placeholderTextColor={'#a3a2a2'}
                      onChangeText={text => {
                        setMail(text);
                        validateMail(text);
                      }}
                    />
                    {ismailValid && (
                      <Icon
                        name="checkmark-done-circle-outline"
                        size={25}
                        color="green"
                      />
                    )}
                  </View>
                </View>
                <View style={CssStyle.styles.register_textInput_container}>
                  <View style={CssStyle.styles.register_textinputminiContainer}>
                    <Icon
                      name={
                        passwordVisible
                          ? 'lock-open-outline'
                          : 'lock-closed-outline'
                      }
                      size={25}
                      color="#900"
                    />
                    <TextInput
                      placeholder="Enter Password"
                      style={CssStyle.styles.register_textInput}
                      secureTextEntry={!passwordVisible}
                      value={password}
                      placeholderTextColor={'#a3a2a2'}
                      maxLength={6}
                      onChangeText={text => {
                        setPassword(text);
                        validatePassword(text);
                      }}
                    />
                    <TouchableOpacity
                      onPress={() => setpasswordVisible(!passwordVisible)}>
                      <Icon
                        name={
                          passwordVisible ? 'eye-outline' : 'eye-off-outline'
                        }
                        size={25}
                        color="#900"
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <TouchableOpacity
                  style={CssStyle.styles.register_Button}
                  onPress={toSingup}>
                  <Text style={CssStyle.styles.register_btn_text}>Sign Up</Text>
                </TouchableOpacity>
                <View style={CssStyle.styles.register_or_container}>
                  <Text style={CssStyle.styles.register_or_text}>Or</Text>
                </View>

                <View style={CssStyle.styles.icons_container}>
                  <TouchableOpacity style={CssStyle.styles.app_icon}>
                    <Image
                      source={require('../assets/google.png')}
                      resizeMode="contain"
                      style={CssStyle.styles.icon_image}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity style={CssStyle.styles.app_icon}>
                    <Image
                      source={require('../assets/apple.png')}
                      resizeMode="contain"
                      style={CssStyle.styles.icon_image}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity style={CssStyle.styles.app_icon}>
                    <Image
                      source={require('../assets/facebook.png')}
                      resizeMode="contain"
                      style={CssStyle.styles.icon_image}
                    />
                  </TouchableOpacity>
                </View>

                <View style={CssStyle.styles.get_to_login_text}>
                  <Text style={CssStyle.styles.last_container}>
                    Already have an Account ?
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={CssStyle.styles.to_signup_text}> Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Animated.View>
          </ScrollView>
        </SafeAreaView>


        {loader && (
     <View style={CssStyle.styles.loaderContainer}>
       <View style={CssStyle.styles.loaderBackground} />
       <LottieView
         style={CssStyle.styles.loaderAnimation}
         source={require('../assets/loader.json')}
         autoPlay
         loop
       />
     </View>
   )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  RegisterContaine: {
    flex: 1,
    backgroundColor: '#A1EEBD',
  },
  RegisterText_hello: {
    fontSize: 30,
    color: 'black',
    fontWeight: '600',
    paddingVertical: 20,
  },
  Register_mainContainer: {
    padding: 20,
  },
  register_back_icon: {
    backgroundColor: '#fff',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderBottomLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  animatedView: {
    width: '100%',
  },
  registerFormContaine: {
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  register_textInput_container: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    height: 50,
    borderColor: '#222831',
    marginVertical: 10,
  },
  register_textInput: {
    fontSize: 16,
    height: '100%',
    flex: 1,
    paddingLeft: 10,
  },
  register_textinputminiContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  register_Button: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    marginVertical: 20,
    marginHorizontal: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9CDBA6',
    borderColor: '#CDE8E5',
    opacity: 5,
  },
  register_btn_text: {fontSize: 18, color: 'black'},
  register_or_container: {justifyContent: 'center', alignItems: 'center'},
  register_or_text: {fontSize: 25, color: 'black', fontWeight: '400'},
  app_icon: {padding: 5, borderRadius: 6, backgroundColor: '#EEF7FF'},
  icon_image: {width: 30, height: 30},
  icons_container: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'space-evenly',
  },
  lottieImg: {
    width: 200,
    height: 250,
    resizeMode: 'contain',
  },
  get_to_login_text: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  to_signup_text: {color: '#40A578', fontSize: 14},
  last_container: {color: 'black', fontSize: 14},
});
