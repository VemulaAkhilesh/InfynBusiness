import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import {BlurView} from '@react-native-community/blur';
import { useNavigation } from '@react-navigation/native';
import constants from '../CommonClass/Costants';
const backgroundTriangle = require('../assets/BikeOrderAssets/rectangleHome.png');
const bicycleImage = require('../assets/BikeOrderAssets/Bicycle.png');
const ICON_DATA = [
  {title: 'All', iconName: 'apps'},
  {title: 'MotorBike', iconName: 'motorbike-electric'},
  {title: 'Road', iconName: 'road-variant'},
  {title: 'hill', iconName: 'slope-uphill'},
  {title: 'helment', iconName: 'racing-helmet'},
];

const data = [
  {
    id: '1',
    type: 'Road Bike',
    brand: 'PEUGEOT - LR01',
    cost: '$ 1,999.99',
    bikeimage: require('../assets/BikeOrderAssets/bike1.png'),
 
  },
  {
    id: '2',
    type: 'Road Helmet',
    brand: 'SMITH - Trade',
    cost: '$ 120',
    bikeimage: require('../assets/BikeOrderAssets/helmet.png'),
  
  },
  {
    id: '3',
    type: 'Road Helmet',
    brand: 'SMITH - Trade',
    cost: '$ 120',
    bikeimage: require('../assets/BikeOrderAssets/helmet.png'),
  
  },  {
    id: '4',
    type: 'Road Bike',
    brand: 'PEUGEOT - LR01',
    cost: '$ 1,999.99',
    bikeimage: require('../assets/BikeOrderAssets/bike1.png'),
 
  }, {
    id: '5',
    type: 'Road Helmet',
    brand: 'SMITH - Trade',
    cost: '$ 120',
    bikeimage: require('../assets/BikeOrderAssets/helmet.png'),
  
  }, {
    id: '6',
    type: 'Road Bike',
    brand: 'PEUGEOT - LR01',
    cost: '$ 1,999.99',
    bikeimage: require('../assets/BikeOrderAssets/bike2.png'),
 
  },{
    id: '7',
    type: 'Road Bike',
    brand: 'PEUGEOT - LR01',
    cost: '$ 1,999.99',
    bikeimage: require('../assets/BikeOrderAssets/bike1.png'),
 
  },
  {
    id: '8',
    type: 'Road Helmet',
    brand: 'SMITH - Trade',
    cost: '$ 120',
    bikeimage: require('../assets/BikeOrderAssets/helmet.png'),
  
  },
  {
    id: '9',
    type: 'Road Helmet',
    brand: 'SMITH - Trade',
    cost: '$ 120',
    bikeimage: require('../assets/BikeOrderAssets/helmet.png'),
  
  },  {
    id: '10',
    type: 'Road Bike',
    brand: 'PEUGEOT - LR01',
    cost: '$ 1,999.99',
    bikeimage: require('../assets/BikeOrderAssets/bike1.png'),
 
  }, {
    id: '11',
    type:'Road Helmet',
    brand: 'SMITH - Trade',
    cost: '$ 120',
    bikeimage: require('../assets/BikeOrderAssets/helmet.png'),
  
  }, {
    id: '12',
    type: 'Road Bike',
    brand: 'PEUGEOT - LR01',
    cost: '$ 1,999.99',
    bikeimage: require('../assets/BikeOrderAssets/bike2.png'),
 
  },


];
const BikeOrderHome = () => {

  const [selectItem, setSelectItem] = useState('All');
const navigation:any=useNavigation();

  const renderItem = ({item}: any) => {
    const isSelected = item.title === selectItem;
    return (
    

     
      <TouchableOpacity style={styles.flatListRenderItem} onPress={() => setSelectItem(item.title)}>
        <LinearGradient
         colors={isSelected ? ['#34C8E8', '#4E4AF2'] : ['#353F54', '#222834']}
          start={{x: 0.0, y: 0.0}}
          end={{x: 1.0, y: 1.0}}
          style={styles.searchGradent}>
          {item.title === 'All' ? (
            <Text style={styles.flatText}>All</Text>
          ) : (
            <MaterialIcon name={item.iconName} size={23} color={'#fff'} />
          )}
        </LinearGradient>
      </TouchableOpacity> 
    );
  };
const filterCategory=({ item }: { item: any })=>{

  return(
    <TouchableOpacity style={styles.cardOffer1} onPress={()=>navigation.navigate(constants.SelectCate,{...item})}>
    <BlurView
      style={styles.absolute}
      blurType="chromeMaterialDark"
      blurAmount={10}
      reducedTransparencyFallbackColor="white"
    />
  <View style={{padding:4,alignItems:'flex-end',paddingRight:5}}>
  <MaterialIcon name='cards-heart-outline' size={25} color={'#fff'}/>
  </View>
    <View style={styles.offerContainer1}>
      <Image source={item.bikeimage} resizeMode="contain" style={{width:180,height:80}} />
  
    </View>
    <View style={styles.offerContainer3}>
    
      <Text style={styles.offerText1}>{item.type}</Text>
      <Text style={styles.brandName}>{item.brand}</Text>
      <Text style={styles.offerText1}>{item.cost}</Text>
   
    </View>
  </TouchableOpacity>
  )
}



  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#222834', '#353F54']}
        style={styles.gradientContainer}>
        <Image source={backgroundTriangle} style={styles.backgroundRect} />
        <SafeAreaView style={styles.mainContainer}>
          <View style={styles.viewContainer}>
            <Text style={styles.text}>Choose Your Bike</Text>
            <TouchableOpacity style={styles.searchContainer}>
              <LinearGradient
                colors={['#34C8E8', '#4E4AF2']}
                start={{x: 0.0, y: 0.0}}
                end={{x: 1.0, y: 1.0}}
                style={styles.searchGradent}>
                <Icon name="search" size={20} color={'#fff'} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.offerContainer}>
            <View style={styles.cardOffer}>
              <BlurView
                style={styles.absolute}
                blurType="chromeMaterialDark"
                blurAmount={10}
                reducedTransparencyFallbackColor="white"
              />
              <View style={styles.offerContent}>
                <Image source={bicycleImage} resizeMode="contain" />
                <Text style={styles.offerText}>30% Off</Text>
              </View>
            </View>
          </View>

          <View style={styles.offerContainer}>
            <View style={{transform: [{skewY: '-4deg'}],
}}>
            <FlatList
              data={ICON_DATA}
              renderItem={renderItem}
              keyExtractor={item => item.title}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{padding: 10}}
              
              scrollEnabled={false}
            /></View>

<ScrollView
              contentContainerStyle={{flexGrow: 1}}
              style={{transform: [{skewY: '-4deg'}]}}
            >
              <FlatList 
                data={data}
                renderItem={filterCategory}
                keyExtractor={(item) => item.id}
                numColumns={2}
                scrollEnabled={false} // Disable scrolling for the FlatList
              />
            </ScrollView>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default BikeOrderHome;

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
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  backgroundRect: {
    position: 'absolute',
    right: 0,
    top: 50,
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
    justifyContent: 'space-between',
  },
  searchContainer: {
    zIndex: 1,
    borderColor: '#000',

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
    borderRadius: 10,borderWidth:1,borderColor:'#777777'
  },
  offerContainer: {
    paddingHorizontal: 20,
    paddingTop: 15,
  }, offerContainer1: {
justifyContent:'center',alignItems:'center',padding:8,transform: [{skewY: '4deg'}]
  },
  offerContainer3: {
    justifyContent:'center',padding:10,transform: [{skewY: '4deg'}]
      },
  cardOffer: {
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    margin: 10,
    borderWidth: 1.3,
    borderColor: '#777777',
    backgroundColor: 'rgba(53, 63, 84, 0.6)',
    transform: [{skewY: '-4deg'}],
  },
  gradient: {
    padding: 20,
  },
  offerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF99',
  },  offerText1: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF99',
  }, brandName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#fff',marginVertical:3
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  offerContent: {
    transform: [{skewY: '4deg'}],
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  flatListContainer: {
    paddingHorizontal: 20,
  },flatText:{
    fontSize:18,color:'#fff',fontWeight:'bold'
  },flatListRenderItem:{
    marginRight: 10,
    paddingHorizontal: 4,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',transform: [{skewY: '4deg'}],
  },  cardOffer1: {
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    margin: 10,
    borderWidth: 1.3,
    borderColor: '#777777',
    backgroundColor: 'rgba(53, 63, 84, 0.6)'
    ,width:'48%',flex:1,height:210
  },
});
