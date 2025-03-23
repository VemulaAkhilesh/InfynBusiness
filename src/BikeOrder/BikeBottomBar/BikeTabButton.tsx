import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { iocns } from '../BikeBottomBar/BikeTabIcons';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

const BikeTabButton = ({ onPress, onLongPress, isFocused, routeName, color, label }: any) => {
  const iconComponent = iocns[routeName];

  if (!iconComponent) {
    console.warn(`No icon found for route: ${routeName}`);
    return null;
  }

  const scale = useSharedValue(0);
  const translationY = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, { damping: 10, stiffness: 100 });
    translationY.value = withSpring(isFocused ? -25 : 0, { damping: 10, stiffness: 100 });
  }, [isFocused]);

  //---------->Icon animation (scale and top movement)
  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);
    return {
      transform: [{ scale: scaleValue, }],justifyContent:'center',alignItems:'center',
    };
  });

  //-------------->Animate the entire tab moving up when focused
  const animatedTabStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translationY.value }],
    };
  });

  //---------->Animate label opacity based on focus
  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);
    return {
      opacity,
    };
  });

  return (
    <Animated.View style={[styles.tabbarItem, animatedTabStyle]}>
      <Pressable onPress={onPress} onLongPress={onLongPress} style={styles.tabbarItem}>
        {isFocused ? (
          <View style={{  shadowColor: '#fff', 
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 3,
          borderRadius: 12,}}>
          <LinearGradient
            colors={['#34C8E8', '#4E4AF2']}
            style={[
              styles.rhombusBackground,
              { width: 65, height: 50, transform: [{ skewX: '-15deg' }, { rotate: '-15deg' }] }
            ]}
          >
            <View style={{justifyContent:'center',alignItems:'center',width:'100%',height:'100%',marginTop:10}}
            >
            <Animated.View style={animatedIconStyle}>
              {iconComponent({
                color: '#fff', transform: [{ rotate: '15deg' }], 
              })}
            </Animated.View></View>

            <Animated.Text style={[{ color: '#fff', fontSize: 12 }, animatedTextStyle]}>
              {label}
            </Animated.Text>
          </LinearGradient></View>
        ) : (
          <>
            <Animated.View style={animatedIconStyle}>
              {iconComponent({
                color: '#c6c6cc',
              })}
            </Animated.View>

            <Animated.Text style={[{ color: '#c6c6c6', fontSize: 12 }, animatedTextStyle]}>
              {label}
            </Animated.Text>
          </>
        )}
      </Pressable>
    </Animated.View>
  );
};

export default BikeTabButton;

const styles = StyleSheet.create({
  tabbarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  rhombusBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 65, 
    height: 50, 
    transform: [{ rotate: '-15deg', },{skewX:'-15deg'}],  
   // transform: [{ rotate: '-15deg', },{skewX:'-15deg'}],  
    borderRadius: 12,  
    padding: 8,
    shadowColor: '#fff', 
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 10, 
  },
});
