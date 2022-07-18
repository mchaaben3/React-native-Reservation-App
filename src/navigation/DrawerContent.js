import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../constants';
import Entypo from 'react-native-vector-icons/Entypo';

const DrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: colors.primary }}
      >
        <ImageBackground
          source={{
            uri: 'https://reservation.trustdev.info/static/media/Groupe%20de%20masques%2010.b55bbe35.png',
          }}
          style={{ padding: 20 }}
        >
          <Image
            source={{
              uri: 'https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg',
            }}
            style={{
              height: 50,
              width: 50,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto',
              marginBottom: 5,
            }}
          >
            ADMIN
          </Text>
          <View style={{ flexDirection: 'row' }}></View>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Entypo name="circle-with-minus" size={20} color={colors.primary} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto',
                marginLeft: 5,
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DrawerContent;
