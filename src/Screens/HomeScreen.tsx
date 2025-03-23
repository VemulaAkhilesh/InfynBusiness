import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CssStyle from '../StyleSheet/CssStyle';
import Colors from '../CommonClass/ColorCode';
import constants from '../CommonClass/Costants';

const HomeScreen = ({ navigation }: any) => {
  // Data for cards with names, icons, and navigation targets
  const data = [
    { id: '1', name: 'Food', icon: 'fast-food-outline', screen: 'FoodWelcome' },
    { id: '2', name: 'Movies', icon: 'film-outline', screen: 'MoviesWelcome' },
    { id: '3', name: 'Bicycle Order', icon: 'bicycle', screen: 'BikeOrderHome' },

 
  ];

  const handleNavigation = (screen: string) => {
    switch (screen) {
      case 'FoodWelcome':
        navigation.navigate('FoodWelcome');
        break;
      case constants.BikeOrderHome:
        navigation.navigate(constants.BikeOrderHome);
        break;
          
        
      default:
        console.warn(`No screen found for: ${screen}`);
        break;
    }
  };


  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.home_card}
      onPress={() => handleNavigation(item.screen)}
    >
      <Icon name={item.icon} size={28} color={'#000'} />
      <Text style={styles.home_card_text}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[CssStyle.styles.global_flex, styles.home_container]}>
      <View style={styles.home_contentContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.home_card_container}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  home_container: {
    backgroundColor: Colors.primary,
  },
  home_contentContainer: {
    flex: 1,
  },
  home_card: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 10,
    width: '48%',
    marginBottom: 10,
  },
  home_card_text: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },
  home_card_container: {
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
