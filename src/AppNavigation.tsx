import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';

import HomeScreen from './Screens/HomeScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import OnBoardingScreen from './Screens/OnBoarding/OnBoardingScreen';
import RegisterScreen from './Screens/RegisterScreen';
import Login from './Screens/LoginScreen/Login';
import ProfileScreen from './Screens/Profile/ProfileScreen';
import CustomDraweSide from './Screens/DrawerNavigation/CustomDraweSide';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SettingsScreen from './Screens/SettingsScreen';

import BottmNavTab from './BottomNavTab';
import CustomtabBar from './CustomBottomBar/CustomTabBar';
import Header from './CommonClass/Header';
import { SafeAreaView } from 'react-native';
import ChatingScreen from './Screens/ChatWithFrinend/ChatingScreen';
import FoodHomeScreen from './FoodPrepare/FoodHomeScreen';
import FoodSplashScreen from './FoodPrepare/FoodSplashScreen';
import RecipeDetails from './FoodPrepare/RecipeDetails/RecipeDetails';
import BikeOrderHome from './BikeOrder/BikeOrderHome';
import constants from './CommonClass/Costants';
import StroesScreen from './BikeOrder/BikeScreens/StroesScreen';
import BikeCartScreen from './BikeOrder/BikeScreens/BikeCartScreen';
import BikeProfileScreen from './BikeOrder/BikeScreens/BikeProfileScreen';
import HistoryScreen from './BikeOrder/BikeScreens/HistoryScreen';
import CoustomBikeBottomBar from './BikeOrder/BikeBottomBar/CustomBikeBottomBar';
import SelectCate from './BikeOrder/Selectedcategory/SelectCate';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tabs Navigator
const BottomTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBar={props => <CustomtabBar {...props} />}
     screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#006769',
      tabBarInactiveTintColor: '#000',
      tabBarShowLabel: true,
      tabBarStyle: {
        backgroundColor: '#fff',
        paddingBottom: 3,
      },
  }}  
      >


    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="home-outline" size={size} color={color} />
        ),
        tabBarLabel: 'Home',
      }}
    />
    <Tab.Screen
      name="Chat"
      component={ChatingScreen}
      options={{
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="settings-outline" size={size} color={color} />
        ),
        tabBarLabel: 'Chat',
      }}
    />
   <Tab.Screen
     name="Profile"
     component={ProfileScreen}
     options={{
      headerShown:false,
       tabBarIcon: ({ color, size }) => (
         <Icon name="person-outline" size={size} color={color} />
       ),
       tabBarLabel: 'Profile',
     }}
   />


 {/* //  name="Home" component={HomeScreen} options={{title:'Home'}}/> */}
 {/* // <Tab.Screen name="Settings" component={SettingsScreen} options={{title:'Settings'}} /> */}
 {/* // <Tab.Screen name="profile" component={ProfileScreen} options={{title:'Profile'}} /> */}
  </Tab.Navigator>
);





const BikeOrderBottomBar = () => (
  <Tab.Navigator
    initialRouteName="Bike"
    tabBar={props => <CoustomBikeBottomBar {...props} />}
     screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#006769',
      tabBarInactiveTintColor: '#000',
      tabBarShowLabel: true,
      tabBarStyle: {
        backgroundColor: '#fff',
        paddingBottom: 3,
      },
  }}  
      >


    <Tab.Screen
      name="Bike"
      component={BikeOrderHome}
      options={{
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <MaterialIcon name="pedal-bike" size={size} color={color} />
        ),
        tabBarLabel: 'Bike',
      }}
    />
    <Tab.Screen
      name="Store"
      component={StroesScreen}
      options={{
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="map" size={size} color={color} />
        ),
        tabBarLabel: 'Store',
      }}
    />
   <Tab.Screen
     name="Cart"
     component={BikeCartScreen}
     options={{
      headerShown:false,
       tabBarIcon: ({ color, size }) => (
         <Icon name="cart" size={size} color={color} />
       ),
       tabBarLabel: 'Cart',
     }}
   />
    <Tab.Screen
     name="Profile"
     component={BikeProfileScreen}
     options={{
      headerShown:false,
       tabBarIcon: ({ color, size }) => (
         <Icon name="person" size={size} color={color} />
       ),
       tabBarLabel: 'Profile',
     }}
   />
    <Tab.Screen
     name="History"
     component={HistoryScreen}
     options={{
      headerShown:false,
       tabBarIcon: ({ color, size }) => (
         <Icon name="document-text" size={size} color={color} />
       ),
       tabBarLabel: 'History',
     }}
   />


 {/* //  name="Home" component={HomeScreen} options={{title:'Home'}}/> */}
 {/* // <Tab.Screen name="Settings" component={SettingsScreen} options={{title:'Settings'}} /> */}
 {/* // <Tab.Screen name="profile" component={ProfileScreen} options={{title:'Profile'}} /> */}
  </Tab.Navigator>
);









// Drawer Navigator
const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={props => <CustomDraweSide {...props} />}
    screenOptions={{

      header: ({ scene }:any) => <Header title={'InFyn'} />, 
      drawerLabelStyle: { marginLeft: -25, fontSize: 15, fontWeight: '500' },
      drawerActiveBackgroundColor: '#A1EEBD',
      drawerInactiveBackgroundColor: '#fff',
      drawerActiveTintColor: '#006769',
      drawerInactiveTintColor: '#000',
    }}>
    <Drawer.Screen
      name="HomeDrawer"
      component={BottomTabNavigator}
      options={{
        drawerIcon: ({ color }) => (
          <Icon name="home-outline" size={22} color={color} />
        ),
        drawerLabel: 'Home',
      }}
    />
    <Drawer.Screen
      name="SettingsDrawer"
      component={SettingsScreen}
      options={{
        drawerIcon: ({ color }) => (
          <Icon name="settings-outline" size={22} color={color} />
        ),
        drawerLabel: 'Settings',
      }}
    />
    <Drawer.Screen
      name="ProfileDrawer"
      component={ProfileScreen}
      options={{
        drawerIcon: ({ color }) => (
          <Icon name="person-outline" size={22} color={color} />
        ),
        drawerLabel: 'Profile',
      }}
    />
  </Drawer.Navigator>
);

const AppNavigation = () => {
 
  const [showOnboarding, setShowOnboarding] = useState<boolean>(false);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLunched", "true");
        setShowOnboarding(true);
      } else {
        setShowOnboarding(false);
      }
    });
  }, []);


  
 
 // Stack Navigator configuration
 const MainStackNavigator = () => (
  <Stack.Navigator initialRouteName={showOnboarding ? "OnBoarding" : "Welcome"} >
    <Stack.Screen name="OnBoarding" component={OnBoardingScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="SignUp" component={RegisterScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    {/* food screes */}
    <Stack.Screen name="FoodWelcome" component={FoodSplashScreen} options={{ headerShown: false }} />
    <Stack.Screen name="FoodHomeScreen" component={FoodHomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="RecipeDetails" component={RecipeDetails} options={{ headerShown: false }} />

    {/* Bike Orders */}
    <Stack.Screen name={constants.BikeOrderHome} component={BikeOrderBottomBar} options={{ headerShown: false }} />
    <Stack.Screen name={constants.SelectCate} component={SelectCate} options={{ headerShown: false }} />
    
    
  </Stack.Navigator>
);





  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName={showOnboarding ? "OnBoarding" : "Welcome"}> */}
        {/* <Stack.Screen name="OnBoarding" component={OnBoardingScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="SignUp" component={RegisterScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} /> */}
      {/* </Stack.Navigator> */}
      
      
      
      
      <MainStackNavigator />
    </NavigationContainer>
  );
}

export default AppNavigation;
