import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from './ColorCode';
import CssStyle from '../StyleSheet/CssStyle';
import AnimatedLottieView from 'lottie-react-native';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    const navigation: any = useNavigation(); 
useEffect(()=>{
console.log("akhilesh1233")
},[])
  return (
    <SafeAreaView >
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={28} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <AnimatedLottieView
          source={require('../assets/profileanimi.json')} 
          style={styles.profileImage}
          loop
          autoPlay
        />
      </TouchableOpacity>
    </View></SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 60,
    backgroundColor: Colors.primary, // Adjust the background color as needed
    // For shadow on Android
    // For shadow on iOS
    shadowOffset: { width: 0, height: 2 },

    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',color:Colors.black
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
