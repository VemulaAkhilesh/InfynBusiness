import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CssStyle from '../StyleSheet/CssStyle';
import Colors from '../CommonClass/ColorCode';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, {FadeInDown} from 'react-native-reanimated';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import MasonryList from '@react-native-seoul/masonry-list';
import { CachedImage } from '../Helper/ImageStore';


const {width, height} = Dimensions.get('window');

const FoodHomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Beef');
  const [categories, setCategory] = useState([]);
  const [recipies, setRecipies] = useState([]);
  const [isCategoryLoading, setIsCategoryLoading] = useState<boolean>(false);
  const [isRecipeLoading, setIsRecipeLoading] = useState<boolean>(false);
  const navigation: any = useNavigation();

  useEffect(() => {
    getCategory();
    filterCategory();
  }, []);

  const handle_Category = (category: any) => {
    setRecipies([]); 
    setSelectedCategory(category);
    filterCategory(category);
  };

  const getCategory = async () => {
    setIsCategoryLoading(true); 
    try {
      const response = await axios.get(
        'https://themealdb.com/api/json/v1/1/categories.php',
      );
      if (response && response.data) {
        setCategory(response.data.categories);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsCategoryLoading(false); // Stop loader for categories
    }
  };

  const filterCategory = async (category = 'Beef') => {
    setIsRecipeLoading(true); // Start loader for recipes
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`,
      );
      if (response && response.data) {
        setRecipies(response.data.meals);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsRecipeLoading(false); // Stop loader for recipes
    }
  };

  const renderItem = ({item}: any) => {
    const isSelected = item.strCategory === selectedCategory;

    return (
      <View style={styles.categoryItem}>
        <TouchableOpacity
          onPress={() => handle_Category(item.strCategory)}
          style={[
            styles.categoryContainer,
            isSelected && styles.selectedCategoryContainer,
          ]}>
          {/* <Image */}
            {/* source={{uri: item.strCategoryThumb}} */}
            {/* style={styles.categoryImage} */}
          {/* /> */}
          <CachedImage  uri={item.strCategoryThumb} style={styles.categoryImage} />

   
   
   
   
   

          
        </TouchableOpacity>
        <Text style={styles.categoryText}>{item.strCategory}</Text>
      </View>
    );
  };

  const RenderCategory = ({item, index}: any) => (
    <Animated.View
      entering={FadeInDown.delay(index * 100)
        .duration(600)
        .springify()
        .damping(20)}
      style={styles.card}>
      <Pressable style={{width: '100%', justifyContent: 'center'}} onPress={()=>navigation.navigate('RecipeDetails',{...item})}>
        {/* <Image */}
          {/* source={{uri: item.strMealThumb}} */}
          {/* style={styles.recipeImage} */}
        {/* /> */}

        {/* below image sharedTransition to recipscreen with  uri={item.strMealThumb} */}
        
        <CachedImage  uri={item.strMealThumb}
          style={styles.recipeImage}
        

           />
        <Text style={styles.recipeText}>{item.strMeal}</Text>
      </Pressable>
    </Animated.View>
  );

  return (
    <SafeAreaView style={[CssStyle.styles.global_flex, {backgroundColor: Colors.primary}]}>
      <View style={{padding: 10}}>
        <View style={styles.mainContainer}>
          <Image style={styles.image} source={require('../assets/user.png')} />
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon name="home-outline" size={28} color="#000" />
          </TouchableOpacity>
        </View>
        <Text style={styles.text_18}>Hello Vemula's</Text>
        <Text style={styles.text_22}>Welcome Back Chef</Text>
        <Text style={styles.text_38}>
          Prepare your <Text style={styles.innerText}>Food,</Text>
          {'\n'}At Home 🏠
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Search the recipe"
            placeholderTextColor="gray"
            style={styles.textInput}
          />
          <Icon name="search-outline" size={24} color="#000" style={styles.icon} />
        </View>

        {/* Category Loader */}
        {isCategoryLoading ? (
          <ActivityIndicator size="large" color={Colors.secondary} />
        ) : (
          <Animated.View entering={FadeInDown.duration(-500).springify()}>
            {categories.length > 0 && (
              <FlatList
                data={categories}
                renderItem={renderItem}
                keyExtractor={(item: any) => item.idCategory.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                
              />
            )}
          </Animated.View>
        )}

        {/* Recipes Loader */}
        <View>
          <Text style={[styles.text_22, {marginTop: 10, fontWeight: '600'}]}>Recipes</Text>
          {isRecipeLoading ? (
            <ActivityIndicator size="large" color={Colors.secondary} />
          ) : (
            recipies.length > 0 && (
              <FlatList
                data={recipies}
                renderItem={RenderCategory}
                keyExtractor={(item: any, index: any) =>
                  `${item.idMeal}-${index}`
                }
                numColumns={2}
                columnWrapperStyle={styles.row1}
                contentContainerStyle={styles.container1}
              />
            )
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FoodHomeScreen;

const styles = StyleSheet.create({
  text_18: {color: '#000', fontSize: 18},
  text_22: {color: '#000', fontSize: 22},
  text_38: {color: '#000', fontSize: 38, fontWeight: '500'},
  innerText: {color: 'orange', fontSize: 38},
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 30,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  textInput: {fontSize: 16, paddingHorizontal: 15},
  icon: {justifyContent: 'center', paddingRight: 15},
  image: {height: 50, width: 50},
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  categoryItem: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 15,
  },
  categoryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
    borderRadius: 50,
    elevation: 3,
    padding: 6,
    backgroundColor: '#fff',
  },
  selectedCategoryContainer: {
    backgroundColor: '#FFD700',
  },
  categoryImage: {height: 60, width: 60, borderRadius: 40},
  categoryText: {marginTop: 5, color: '#000', fontSize: 14},
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    alignItems: 'center',
  },
  recipeImage: {
    width: '100%',
    height: height / 4,
    backgroundColor: '#000',borderTopLeftRadius:5,borderTopRightRadius:5
  },
  recipeText: {
    color: '#000',
    paddingVertical: 5,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
  },
  container1: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  row1: {
    justifyContent: 'space-between',
  },
});
