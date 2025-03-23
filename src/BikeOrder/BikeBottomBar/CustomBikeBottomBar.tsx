import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutChangeEvent,
} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Colors from '../../CommonClass/ColorCode';
import BikeTabButton from './BikeTabButton';
import LinearGradient from 'react-native-linear-gradient';

const CoustomBikeBottomBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const [dimensions, setDimention] = useState({height: 20, width: 100});
  const buttonWidth = dimensions.width / state.routes.length;
  const onTabLayout = (e: LayoutChangeEvent) => {
    setDimention({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };
  const tabPositionX = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: tabPositionX.value}],
    };
  });
  return (
    <View onLayout={onTabLayout} style={[{backgroundColor: "#242C3B",},style.tabBar]}>
      {/* <LinearGradient colors={['#353F54', '#222834']} > */}
        <Animated.View
          style={[
            animatedStyle,
            {
              position: 'absolute',
              backgroundColor: '#242C3B',
              borderRadius: 30,
              marginHorizontal: 12,
              width: buttonWidth - 25,
              height: dimensions.height - 15,
            },
          ]}
        />
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            tabPositionX.value = withSpring(buttonWidth * index, {
              duration: 1500,
            });
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
            <BikeTabButton
              key={route.name}
              onPress={onPress}
              onLongPress={onLongPress}
              isFocused={isFocused}
              routeName={route.name}
              color={isFocused ? '#fff' : '#242C3B'}
              label={label}
              style={isFocused ? style.tabButtonFocused : style.tabButton}
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
      {/* </LinearGradient> */}
    </View>
  );
};
export default CoustomBikeBottomBar;

const style = StyleSheet.create({
  tabBar: {
    position: 'absolute',

    bottom: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    //backgroundColor:'#fff',

    paddingVertical: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    shadowOpacity: 0.1,
    flexDirection: 'row',
  },
  angledBackground: {
    top: -15,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#000', // Or any color you want for the angled view
    transform: [{skewY: '-20deg'}], // Creates the angle/slant effect
  },
  //  tabbarItem:{
  // flex:1,
  // justifyContent:'center',
  // alignItems:'center',
  // gap:5
  //  },
  tabButtonFocused: {
    position: 'absolute', // Allow it to be positioned freely
    top: -20, // Move it out of the tab bar for overlap
    zIndex: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
