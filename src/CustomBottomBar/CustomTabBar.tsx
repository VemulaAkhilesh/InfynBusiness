import { View, Text, TouchableOpacity, StyleSheet, LayoutChangeEvent } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import TabBarButton from './TabBarButton';
import { useState } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Colors from '../CommonClass/ColorCode';
const CustomtabBar=({ state, descriptors, navigation }:BottomTabBarProps) =>{
const [dimensions,setDimention]=useState({height:20,width:100})
const buttonWidth=dimensions.width / state.routes.length;
const onTabLayout=(e:LayoutChangeEvent)=>{
    setDimention({
        height:e.nativeEvent.layout.height,
        width:e.nativeEvent.layout.width,
    })
}
const tabPositionX=useSharedValue(0);
const animatedStyle=useAnimatedStyle(()=>{
return{
    transform:[{translateX:tabPositionX.value}]
}
});
  return (
    <View onLayout={onTabLayout} style={style.tabBar}>
        <Animated.View style={[animatedStyle,{
            position:'absolute',
            backgroundColor:Colors.primary,
            borderRadius:30,marginHorizontal:12,
            width:buttonWidth-25,
            height:dimensions.height-15
}]}/>
      {state.routes.map((route,index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
            tabPositionX.value=withSpring(buttonWidth * index,{duration:1500})
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (

            <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            color= {isFocused ? '#673ab7' : '#222'}
            label={label}
            />
         // <TouchableOpacity
         //   key={route.name}
         //   accessibilityRole="button"
         //   accessibilityState={isFocused ? { selected: true } : {}}
         //   accessibilityLabel={options.tabBarAccessibilityLabel}
         //   testID={options.tabBarTestID}
         //   onPress={onPress}
         //   onLongPress={onLongPress}
         //   style={style.tabbarItem}
         // >
         //     {iocns[route.name]({
         //       color: isFocused ? '#673ab7' : '#222'
         //     })}
         //   <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
         //     {label}
         //   </Text>
         // </TouchableOpacity>
        );
      })}
    </View>
  );
}
export default CustomtabBar;


const style=StyleSheet.create({
     tabBar:{
        position:'absolute',
        flexDirection:'row',
        bottom:50,justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#fff',
        marginHorizontal:80,
        borderRadius:35,
        paddingVertical:15,
        shadowColor:'#000',shadowOffset:{width:0,height:10},shadowRadius:10,shadowOpacity:0.1
     },
    //  tabbarItem:{
        // flex:1,
        // justifyContent:'center',
        // alignItems:'center',
        // gap:5
    //  },
})