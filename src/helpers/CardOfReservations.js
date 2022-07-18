import React, { useState } from 'react';
import {
  Animated,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  SwipeView,
} from 'react-native';
import { colors } from '../constants';
// import Moment from 'react-moment';
import moment from 'moment';
import { itemStatusPickColor } from './itemStatusPickColor';
import { deleteReservation } from '../redux/actions/reservationsActions';

export const CardOfReservations = ({ data, index, modal, open }) => {
  const SPACING = 20;
  const AVATAR_SIZE = 50;
  const ITEM_SIZE = AVATAR_SIZE + SPACING * 2;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: data.client.facebookProfilePicture
            ? data.client.facebookProfilePicture
            : 'https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/277801884_10224298725189776_8297366795640705437_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KaJGAT8Xhd4AX-Tm7j0&_nc_oc=AQm55zBeaTbrsxoW6wORFmjxsUH5hXseMndGAnIVOFdmrBCm4NwRdDSKlL2xv7JNe74&_nc_ht=scontent.ftun16-1.fna&oh=00_AT-UNon5WKdBnC4Bqip5z4K63VX5LKkI3THjuyPkbo4dAw&oe=62CB30BD',
        }}
        style={{
          width: AVATAR_SIZE,
          height: AVATAR_SIZE,
          borderRadius: 50,
          marginRight: SPACING / 2,
        }}
      />
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: SPACING / 3,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: '700',
              marginRight: SPACING,
            }}
          >
            #{data.ref}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '700',
              marginRight: SPACING,
            }}
          >
            {moment(data.date).format('DD-MM-YYYY')}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingBottom: SPACING / 3,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: '100',
              opacity: 0.5,
            }}
          >
            {' '}
            {data.client.role} :{' '}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '100',
              opacity: 0.5,
            }}
          >
            {data.client.profile.firstName} {data.client.profile.lastName}
          </Text>
        </View>

        <View
          style={{
            flexShrink: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',

            marginTop: SPACING / 2,
          }}
        >
          <View
            style={{
              flex: 0.5,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: SPACING / 4,
              borderRadius: 999,
              backgroundColor: colors.lightGray,
            }}
          >
            <Pressable onPress={() => open(data._id)}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  opacity: 0.8,
                }}
              >
                More details..
              </Text>
            </Pressable>
          </View>

          <View
            style={{
              flex: 0.3,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: SPACING / 4,
              borderRadius: 999,
              backgroundColor: itemStatusPickColor(data.status),
            }}
          >
            <Text
              style={[
                {
                  fontSize: 8,
                  fontWeight: '100',
                },
              ]}
            >
              {data.status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    borderRadius: 16,
    borderColor: colors.primary,
    borderWidth: 1,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.white,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 8,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
  },
  button: {
    borderRadius: 999,
    padding: 10,
    elevation: 5,
    margin: 10,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: colors.red,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
