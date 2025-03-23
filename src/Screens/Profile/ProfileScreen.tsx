import React, {useRef, useState, useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  Button,
  Animated,
} from 'react-native';
import CssStyle from '../../StyleSheet/CssStyle';
import Colors from '../../CommonClass/ColorCode';
import Icon from 'react-native-vector-icons/Ionicons';
import AnimatedLottieView from 'lottie-react-native';

const ProfileScreen = () => {
  const slideAnim = useRef(new Animated.Value(200)).current;
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("Vemula's");
  const [email, setEmail] = useState('akhilesh@example.com');
  const [phone, setPhone] = useState('+123 456 7890');
  const [address, setAddress] = useState('Hyderabad, India');

  const handleSave = () => {
   
    setModalVisible(false);
  };
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return (
    <SafeAreaView style={CssStyle.styles.global_flex}>
      <View>
        <TouchableOpacity
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginHorizontal: 20,
            marginVertical: 20,
            flexDirection: 'row',
          }}
          onPress={() => setModalVisible(true)}>
          <Text style={{fontSize: 16, color: Colors.black}}>Edit</Text>
          <Icon name="create-outline" size={25} color={'#000'} />
        </TouchableOpacity>

      
        <View style={{alignItems: 'center', marginVertical: '15%'}}>
          <View style={CssStyle.styles.profile_card}>
            <Image
              source={require('../../assets/user.png')}
              resizeMode="contain"
              style={CssStyle.styles.profile_image}
              
            />

            <TouchableOpacity style={CssStyle.styles.profile_edit_img}>
            <Icon name="create-outline" size={20} color={'#000'} />
            </TouchableOpacity>

            <View style={CssStyle.styles.textContainer}>
              <Text style={CssStyle.styles.nameText}>{name}</Text>
              <Text style={CssStyle.styles.infoText}>Email: {email}</Text>
              <Text style={CssStyle.styles.infoText}>Phone: {phone}</Text>
              <Text style={CssStyle.styles.infoText}>Address: {address}</Text>
            </View>
          </View>
        </View>

          <AnimatedLottieView
    style={CssStyle.styles.lottieImg}
    source={require('../../assets/profileDash.json')}
    autoPlay
    loop
  />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                borderColor: '#fff',
                width: '80%',
                paddingVertical: 10,
              }}>
              <Icon name="close-circle" size={25} color={'#fff'} />
            </TouchableOpacity>

            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone"
              value={phone}
              onChangeText={setPhone}
            />
            <TextInput
              style={styles.input}
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
            />

            <TouchableOpacity
              onPress={handleSave}
              style={styles.buttonContainer}>
              <Text style={{color: Colors.black, fontSize: 14}}>Save</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 8,

    borderColor: Colors.black,
  },
  buttonContainer: {
    backgroundColor: Colors.primary,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 8,
  },
});

export default ProfileScreen;
