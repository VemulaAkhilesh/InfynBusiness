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

const SelectCate = ({route}: any) => {
  console.log('Route Params:', route.params);
  let item = route.params;
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
            <Text style={styles.titletext}>{item.brand}</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/BikeOrderAssets/Bicycle.png')}
              resizeMode="contain"
              style={styles.bicycleImage}
            />
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.innerContentContainer}>
              <LinearGradient
                colors={['#353F54', '#222834']}
                style={styles.contentGradient}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.buttonDescription}>
                    <Text style={styles.buttonDescriptionText}>
                      Description
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonSpecification}>
                    <Text style={styles.buttonSpecificationText}>
                      Specification
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.textContainer}>
                  <Text style={styles.titletext1}>{item.brand}</Text>
                  <Text style={styles.descriptionText}>
                    The LR01 uses the same design as the most iconic bikes from
                    PEUGEOT Cycles' 130-year history and combines it with agile,
                    dynamic performance that's perfectly suited to navigating
                    today's cities. As well as a lugged steel frame and iconic
                    PEUGEOT black-and-white chequer design, this city bike also
                    features a 16-speed Shimano Claris drivetrain.
                  </Text>
                </View>

                <View style={styles.footer}>
                  <View style={styles.footerInner}>
                    <Text style={styles.costText}>{item.cost}</Text>
                    <LinearGradient
                      colors={['#34C8E8', '#4E4AF2']}
                      start={{x: 0.0, y: 0.0}}
                      end={{x: 1.0, y: 1.0}}
                      style={styles.addToCartGradient}>
                      <TouchableOpacity>
                        <Text style={styles.addToCartText}>Add To Cart</Text>
                      </TouchableOpacity>
                    </LinearGradient>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default SelectCate;

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
    textAlign: 'center',
    paddingRight: 50,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 200,
    marginTop: 10,
  },
  bicycleImage: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    marginTop: 30,
  },
  innerContentContainer: {
    height: '100%',
    borderColor: '#000',
    borderTopStartRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
  },
  contentGradient: {
    borderTopStartRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 1.3,
    borderColor: '#777777',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },
  buttonDescription: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#323B4F',
    shadowColor: '#000',
    shadowOffset: {width: -5, height: -5},
    shadowOpacity: 0.5,
    shadowRadius: 41,
    elevation: 20,
    borderColor: '#302f2f',
    borderWidth: 1.2,
  },
  buttonDescriptionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4286EE',
  },
  buttonSpecification: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28303F',
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 41,
    elevation: 20,
    borderColor: '#302f2f',
  },
  buttonSpecificationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF99',
  },
  textContainer: {
    padding: 20,
    marginBottom: 30,
  },
  titletext1: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 50,
  },
  descriptionText: {
    color: '#ffffff99',
    fontSize: 18,
    paddingVertical: 10,
  },
  footer: {
    justifyContent: 'flex-start',height:'100%'
  },
  footerInner: {
    backgroundColor: '#262E3D',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 60,
    alignItems: 'center',
    height: 80,
    justifyContent: 'space-evenly',
    borderWidth: 1.3,
    borderColor: '#777777',
  },
  costText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4286EE',
  },
  addToCartGradient: {
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  addToCartText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
});
