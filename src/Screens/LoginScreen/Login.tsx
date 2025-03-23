import {
  Alert,
  Animated,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {translate} from '@shopify/react-native-skia';
import LottieView from 'lottie-react-native';
import CssStyle from '../../StyleSheet/CssStyle';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../CommonClass/FireBaseHelper';
import Colors from '../../CommonClass/ColorCode';

const Login = ({navigation}: any) => {
  const slideAnim = useRef(new Animated.Value(-50)).current;
  const slideAnimUp = useRef(new Animated.Value(1000)).current;
  const [passwordVisible, setpasswordVisible] = useState(false);
  const [loader ,setLoader]=useState(false);
  
  const [mail, setMail] = useState('');
  const [ismailValid, setIsMailValid] = useState(false);

  const [password, setPassword] = useState('');
  const [isPasswordIsValid, setIsPasswordIsValid] = useState(false);
  const [isresponse,setIsresponse]:any=useState();
  const [getUserMail,setUserMail]:any=useState('');
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

  
  const loginToHome = async() => {
    if(mail===''){
      Alert.alert('Please enter email address.');
      return;
    }else if (!ismailValid) {
      Alert.alert('Please enter a valid email address.');
      return;
    }
    if(password===''){
      Alert.alert('Please enter password');
      return;
    }
    else if (!isPasswordIsValid) {
      Alert.alert('Password must be at least 6 characters long.');
      return;
    }
   
    try {
      setLoader(true)

      const response= await signInWithEmailAndPassword(auth, mail, password)
      console.log("vemula",response)
      if(response!=null){
       //Alert.alert(' login')
       setUserMail(response.user.email)
       navigation.navigate('Home');
       setPassword('');
       setLoader(false)
      }else{
        setMail('');
        setPassword('');
        setIsMailValid(false);
       Alert.alert('not used registered')
      }
       
     } catch (err) {
      setLoader(false)
       console.log('got', err);
       Alert.alert('invalid username/password')
       setMail('');
       setPassword('');
       setIsMailValid(false);
     }
   
  };


const resetPassword=async()=>{
  setLoader(true)
  if (mail) {
    try {
      await sendPasswordResetEmail(auth, mail);
      Alert.alert(
        'Password Reset',
        'A password reset email has been sent to your email address.'
      );
      setLoader(false)
    } catch (error) {
      console.error("Error resetting password: ", error);
      Alert.alert('Error');
    }
  } else {
    setLoader(false)
    Alert.alert('Email Required', 'Please enter your email address.');
  }
}







  

  

  return (

<KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  style={{flex: 1}}
  >
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
            {/* <Text style={CssStyle.styles.RegisterText_hello}>Hello !</Text> */}
            {/* </Animated.View> */}
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <LottieView
              style={CssStyle.styles.lottieImg_}
              source={require('../../assets/login_lotti.json')}
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
                    onChangeText={text=>{
                      setPassword(text)
                      validatePassword(text)
                    }}

                  />
                  <TouchableOpacity
                    onPress={() => setpasswordVisible(!passwordVisible)}>
                    <Icon
                      name={passwordVisible ? 'eye-outline' : 'eye-off-outline'}
                      size={25}
                      color="#900"
                    />
                  </TouchableOpacity>
                </View>
               
               
               
              </View>
              <TouchableOpacity style={CssStyle.styles.login_forgetPassword} onPress={resetPassword}>
                  <Text style={CssStyle.styles.login_forgetText}>Forget Password ?</Text>
              </TouchableOpacity>

              <TouchableOpacity style={CssStyle.styles.register_Button}
              onPress={loginToHome}
              >
                <Text style={CssStyle.styles.register_btn_text}>Login</Text>
              </TouchableOpacity>
              <View style={CssStyle.styles.register_or_container}>
                <Text style={CssStyle.styles.register_or_text}>Or</Text>
              </View>

              <View style={CssStyle.styles.icons_container}>
                <TouchableOpacity style={CssStyle.styles.app_icon}>
                  <Image
                    source={require('../../assets/google.png')}
                    resizeMode="contain"
                    style={CssStyle.styles.icon_image}
                  />
                </TouchableOpacity>

                <TouchableOpacity style={CssStyle.styles.app_icon}>
                  <Image
                    source={require('../../assets/apple.png')}
                    resizeMode="contain"
                    style={CssStyle.styles.icon_image}
                  />
                </TouchableOpacity>

                <TouchableOpacity style={CssStyle.styles.app_icon}>
                  <Image
                    source={require('../../assets/facebook.png')}
                    resizeMode="contain"
                    style={CssStyle.styles.icon_image}
                  />
                </TouchableOpacity>
              </View>

              <View style={CssStyle.styles.get_to_login_text}>
                <Text style={CssStyle.styles.last_container}>
                  Don't have an Account ?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                  <Text style={CssStyle.styles.to_signup_text}> Sign Up</Text>
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
              source={require('../../assets/loader.json')}
              autoPlay
              loop
            />
          </View>
        )}
    </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
