import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const backgroundTriangle = require('../../assets/BikeOrderAssets/rectangleHome.png');

const BikeCartScreen = () => {


  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#222834', '#353F54']}
        style={styles.gradientContainer}>
        <Image source={backgroundTriangle} style={styles.backgroundRect} />
        <SafeAreaView style={styles.mainContainer}>
          <View style={styles.viewContainer}>
            <TouchableOpacity
              style={styles.searchContainer}
              onPress={() => navigation.goBack()}>
              <LinearGradient
                colors={['#34C8E8', '#4E4AF2']}
                start={{x: 0.0, y: 0.0}}
                end={{x: 1.0, y: 1.0}}
                style={styles.searchGradent}>
                <Icon name="chevron-back" size={28} color={'#fff'} />
              </LinearGradient>
            </TouchableOpacity>
            <Text style={styles.titletext}>Akhilesh</Text>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: 200,
              marginTop: 10,
            }}>
            <Image
              source={require('../../assets/BikeOrderAssets/Bicycle.png')}
              resizeMode="contain"
              style={{width: '100%', height: '100%'}}
            />
            <View>

              <View>
                
              </View>
            </View>


          </View>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default BikeCartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
  backgroundRect: {
    position: 'absolute',
    right: 0,
    top: -10,
    bottom: 0,
    height: '100%',
    resizeMode: 'cover',
    width: '100%',
  },
  viewContainer: {
    paddingHorizontal: 20,
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    zIndex: 1,
    elevation: 8,
    backgroundColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: -10,
      height: 15,
    },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    borderRadius: 10,
  },
  searchGradent: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#777777',
  },
  titletext: {
    flex: 1,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',paddingRight:50
  },
});
