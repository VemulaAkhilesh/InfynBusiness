import { Image, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import React, { useState } from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import CssStyle from '../../StyleSheet/CssStyle';
import Colors from '../../CommonClass/ColorCode';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const CustomDraweSide = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);
 const navigation: any = useNavigation(); 
  const handleLogout = () => {
    setModalVisible(false);
    navigation.navigate('Login');
  };

  return (
    <View style={CssStyle.styles.global_flex}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: Colors.primary }}>
        <View style={CssStyle.styles.profile_contain}>
          <Image
            source={require('../../assets/profile.jpeg')}
            style={CssStyle.styles.profile_img}
          />
          <View style={CssStyle.styles.profile_mainContain}>
            <Text style={CssStyle.styles.profileName}>Vemula's</Text>
            <View style={CssStyle.styles.profileContain}>
              <Text style={CssStyle.styles.profileContain_text}>ID:</Text>
              <Text style={CssStyle.styles.profileContain_text}>123456789</Text>
            </View>
          </View>
        </View>
        <View style={CssStyle.styles.sideMainContain}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={CssStyle.styles.logout_contain}>
        <TouchableOpacity
          style={CssStyle.styles.logout_touch_}
          onPress={() => setModalVisible(true)}>
          <View style={CssStyle.styles.logout_touchable}>
            <Icon name="log-out-outline" size={22} />
            <Text style={CssStyle.styles.logout_icon}>Log out</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={CssStyle.styles.modalOverlay}>
          <View style={CssStyle.styles.modalContent}>
            <Text style={CssStyle.styles.modalTitle}>Confirm Logout</Text>
            <Text style={CssStyle.styles.modalMessage}>
              Are you sure you want to log out?
            </Text>
            <View style={CssStyle.styles.modalButtons}>
              <TouchableOpacity
                style={[CssStyle.styles.modalButton, CssStyle.styles.yesButton]}
                onPress={handleLogout}>
                <Text style={CssStyle.styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[CssStyle.styles.modalButton, CssStyle.styles.noButton]}
                onPress={() => setModalVisible(false)}>
                <Text style={CssStyle.styles.modalButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomDraweSide;
