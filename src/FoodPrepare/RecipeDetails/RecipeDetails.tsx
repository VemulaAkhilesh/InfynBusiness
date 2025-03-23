import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CachedImage} from '../../Helper/ImageStore';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Colors from '../../CommonClass/ColorCode';
import YoutubeIframe from 'react-native-youtube-iframe';
import Animated, {FadeIn, FadeInDown} from 'react-native-reanimated';
const { height: screenHeight } = Dimensions.get('window');
const {width, height} = Dimensions.get('window');
const scaleFont = (size: number) => {
  const guidelineBaseWidth = 375;
  return (width / guidelineBaseWidth) * size;
};

const RecipeDetails = ({route}: any) => {
  console.log('Route Params:', route.params);
  let item = route.params;
  const navigation: any = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  const [mealData, setMealData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMealData(item.idMeal);
  }, []);

  const getMealData = async (id: any) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
      );
      if (response && response.data) {
        console.log('mealdata', response.data);
        setMealData(response.data.meals[0]);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const ingradentsFetch = (mealData: any) => {
    if (!mealData) return [];
    let indexs = [];
    for (let i = 1; i <= 20; i++) {
      if (mealData['strIngredient' + i]) {
        indexs.push(i);
      }
    }
    return indexs;
  };
  const getYoutubeVideo=(url: any)=>{
    const regax=/[?&]v=([^&]+)/;
    const match =url.match(regax);
    if(match&&match[1]){
        return match[1]
    }
    return null;
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}>
      {/* <StatusBar barStyle={'light-content'} /> */}
      <View style={styles.headerWrapper}>
        <CachedImage uri={item.strMealThumb} style={styles.recipeImage}
         //sharedTransitionTag={item.strMealThumb}
         />



        <Animated.View entering={FadeIn.delay(200).duration(1000)} style={styles.topIconsWrapper}>
          <TouchableOpacity
            style={[styles.iconButton, {marginLeft: 10}]}
            onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={24} style={styles.backIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.iconButton, {marginRight: 10}]}
            onPress={() => setIsFavorite(!isFavorite)}>
            <Icon
              name="heart"
              size={24}
              color={isFavorite ? 'red' : 'grey'}
              style={styles.favoriteIcon}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>

      {loading ? (
        <ActivityIndicator
          size="large"
          color={Colors.secondary}
          style={styles.loadingIndicator}
        />
      ) : (
        <View style={styles.detailsWrapper}>
          <Animated.View entering={FadeInDown.duration(700).springify().damping(12)} style={{paddingVertical: 5}}>
            <Text style={styles.mealTitle}>{mealData?.strMeal}</Text>
            <Text style={styles.mealSubtitle}>{mealData?.strArea}</Text>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(100).duration(700).springify().damping(12)} style={styles.infoWrapper}>
            <View style={styles.infoContainer}>
              <View style={styles.iconWrapper}>
                <Icon name="time-outline" size={28} color={'#000'} />
              </View>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoTextTitle}>35</Text>
                <Text style={styles.infoTextSubtitle}>Mins</Text>
              </View>
            </View>

            <View style={styles.infoContainer}>
              <View style={styles.iconWrapper}>
                <Icon name="people-outline" size={28} color={'#000'} />
              </View>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoTextTitle}>3</Text>
                <Text style={styles.infoTextSubtitle}>Serves</Text>
              </View>
            </View>

            <View style={styles.infoContainer}>
              <View style={styles.iconWrapper}>
                <Icon name="flame-outline" size={28} color={'#000'} />
              </View>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoTextTitle}>103</Text>
                <Text style={styles.infoTextSubtitle}>cal</Text>
              </View>
            </View>

            <View style={styles.infoContainer}>
              <View style={styles.iconWrapper}>
                <Icon name="layers-outline" size={28} color={'#000'} />
              </View>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoTextTitle}>easy</Text>
              </View>
            </View>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(200).duration(700).springify().damping(12)} style={{paddingVertical: 10}}>
            <Text
              style={{
                fontSize: scaleFont(20),
                fontWeight: '600',
                color: '#000',
              }}>
              Ingradents
            </Text>
            <View style={{paddingVertical: 10,marginLeft:20}}>
              {ingradentsFetch(mealData).map(i => {
                return (
                  <View key={i} style={{flexDirection: 'row',alignItems:'center'}}>
                    <View
                      style={{
                        height: 10,
                        width: 10,
                        backgroundColor: '#ffd',
                        borderRadius: 30,justifyContent:'center',alignItems:'center'
                      }}
                    />
                    <View style={{flexDirection:'row',marginLeft:12,justifyContent:'center',alignItems:'center'}}>
                      <Text
                        style={{
                          fontSize: scaleFont(16),
                          fontWeight: 'bold',
                          color: '#000',
                        }}>
                    {mealData['strMeasure' + i]}
                      </Text>
                      <Text
                        style={{fontSize: scaleFont(16), fontWeight: '400',marginLeft:10,color:'#000'}}>
                        {mealData['strIngredient' + i]}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </Animated.View>



          <Animated.View entering={FadeInDown.delay(300).duration(700).springify().damping(12)} style={{marginTop:0}}>
            <Text
              style={{
                fontSize: scaleFont(20),
                fontWeight: '600',
                color: '#000',
              }}>
              Instractions :
            </Text>
<Text style={{fontSize:scaleFont(14),color:'#000',}}>
    {mealData?.strInstructions}
</Text>
            <View>

{
    mealData.strYoutube&&(
      

        <Animated.View entering={FadeInDown.delay(400).duration(700).springify().damping(12)} style={{marginTop:10}}>
        <Text
          style={{
            fontSize: scaleFont(20),
            fontWeight: '600',
            color: '#000',
          }}>
          Recipe Video
        </Text>
        <View>
<YoutubeIframe 
videoId={getYoutubeVideo(mealData.strYoutube)}
height={screenHeight * 0.3}
/>

        </View>
        
        </Animated.View>
    )
}



            </View>

        </Animated.View>



        </View>
      )}
    </ScrollView>
  );
};

export default RecipeDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  contentContainer: {
    paddingBottom: 30,
  },
  headerWrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  recipeImage: {
    width: '100%',
    height: height / 2.5,
    backgroundColor: '#000',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  topIconsWrapper: {
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
  },
  iconButton: {
    backgroundColor: Colors.primary,
    borderRadius: 40,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    color: '#000',
    fontWeight: '600',
  },
  favoriteIcon: {
    fontWeight: '600',
  },
  loadingIndicator: {
    marginTop: 20,
  },
  detailsWrapper: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    paddingTop: 8,
  },
  mealTitle: {
    fontSize: scaleFont(24),
    fontWeight: '600',
    color: '#000',
    paddingBottom: 5,
  },
  mealSubtitle: {
    fontSize: scaleFont(15),
    fontWeight: '500',
    color: '#000',
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  infoContainer: {
    padding: 4,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  iconWrapper: {
    height: 60,
    width: 60,
    backgroundColor: Colors.primary,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoTextWrapper: {
    alignItems: 'center',
    paddingHorizontal: 2,
    marginVertical: 4,
  },
  infoTextTitle: {
    fontSize: scaleFont(14),
    fontWeight: '600',
    color: '#000',
  },
  infoTextSubtitle: {
    fontSize: scaleFont(12),
    fontWeight: '600',
    color: '#000',
  },
});
