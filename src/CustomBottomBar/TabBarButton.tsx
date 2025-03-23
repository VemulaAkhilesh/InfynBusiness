import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { iocns } from './TabIocns'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const TabBarButton = ({onPress,onLongPress,isFocused,routeName,color,label}:any
    //{onPress:Function,onLongPress:Function,isFocused:boolean,routeName:string,color:string,label:string}
    ) => {

        const iconComponent = iocns[routeName];
if (!iconComponent) {
  console.warn(`No icon found for route: ${routeName}`);
  return null; // Or return a default icon component
}

const scale=useSharedValue(0);
useEffect(()=>{
    scale.value=withSpring(typeof isFocused==='boolean'?(isFocused? 1:0):isFocused,{duration:350});
},[scale,isFocused])

const animatedIconStyle=useAnimatedStyle(()=>{
    const scalevalue=interpolate(scale.value,[0,1],[1,1.2]);
    const top=interpolate(scale.value,[0,1],[0,9]);
    return{
        transform:[{
            scale:scalevalue
        }],top
    }
})

const animatedTextStyle=useAnimatedStyle(()=>{
    const opacity=interpolate(scale.value,[0,1],[1,0]);
    return{
        opacity
    }
})
  return (
    <Pressable
    onPress={onPress}
    onLongPress={onLongPress}
    style={styles.tabbarItem}
  >

    <Animated.View style={animatedIconStyle}>
    {iconComponent({
      color: isFocused ? '#673ab7' : '#222'
    })}
    </Animated.View>
  
  
  
    <Animated.Text style={[{ color: isFocused ? '#673ab7' : '#222',fontSize:12 },animatedTextStyle]}>
      {label}
    </Animated.Text>
  </Pressable>
   
   
  )
}

export default TabBarButton

const styles = StyleSheet.create({
    tabbarItem:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:5
     },
})