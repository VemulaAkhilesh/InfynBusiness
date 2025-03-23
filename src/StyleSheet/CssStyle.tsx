import { StyleSheet } from 'react-native';
import Colors from '../CommonClass/ColorCode';

class CssStyle {
  static styles = StyleSheet.create({
   global_flex:{
flex:1
   },
   
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
    lottieImg_: {
      width: 200,
      height: 240,
      resizeMode: 'contain',
    },
    get_to_login_text:{flexDirection: 'row',alignItems: 'center',justifyContent: 'center',},
   to_signup_text:{color: '#40A578', fontSize: 14},
   last_container:{color: 'black', fontSize: 14},
   profile_img:{
    borderRadius:50,
    height:80,
    width:80,resizeMode:'contain'
   },profile_contain:{borderBlockColor:'#EEF7FF',flexDirection:'row',alignItems:'center',padding:10},
   profile_mainContain:{paddingHorizontal:16},
   profileName:{fontSize:18,fontWeight:'600'},
   profileContain_text:{fontSize:14,fontWeight:'600'},
   profileContain:{flexDirection:'row',},
   sideMainContain:{flex:1,backgroundColor:'#fff',paddingTop:10},
   logout_contain:{borderTopWidth:1,padding:20,borderTopColor:'#ccc'},
   logout_touchable:{flexDirection:'row',alignItems:'center'},
   logout_touch_:{paddingVertical:15},
   logout_icon:{fontSize:15,marginLeft:5,fontWeight:'600'},

   //=====================================================================================
   modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  yesButton: {
    backgroundColor: 'red',
    marginRight: 10,
  },
  noButton: {
    backgroundColor: 'green',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  //==================================
  login_forgetPassword:{justifyContent:'flex-end',alignItems:'flex-end',paddingHorizontal:10},
  login_forgetText:{color:Colors.black},
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, 
  },
  loaderBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  loaderAnimation: {
    width: 150, 
    height: 150,
  },profile_card:{
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
    position: 'relative',
    width: '90%',
  },
  profile_image:{
    width: 100,
    height: 100,
    position: 'absolute',
    top: -50,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 4,resizeMode:'contain'
  },  textContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: '500',
  },infoText: {
    fontSize: 16,
    color: Colors.gray,
    marginTop: 10,
  },profile_edit_img:{marginLeft:70,backgroundColor:Colors.primary,borderRadius:20,justifyContent:'center',alignItems:'center',padding:2}
  

  });
}

export default CssStyle;