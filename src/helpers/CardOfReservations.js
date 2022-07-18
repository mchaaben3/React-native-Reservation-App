import {
  faEdit,
  faMonument,
  faPhone,
  faTimes,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import {
  Animated,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { colors } from '../constants';
import Moment from 'react-moment';
import { itemStatusPickColor } from './itemStatusPickColor';
export const CardOfReservations = ({ data, index }) => {
  const [modalVisible, setModalVisible] = useState(false);

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
          <Moment
            element={Text}
            format="MM-DD-YYYY"
            style={{
              fontSize: 12,
              color: colors.gray,
            }}
          >
            {data.date}
          </Moment>
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
            <Pressable onPress={() => setModalVisible(true)}>
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
      <ModalScreen
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        data={data}
      />
    </View>
  );
};

const ModalScreen = ({ modalVisible, setModalVisible, data }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>X</Text>
        </Pressable>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '100',
                  opacity: 0.8,
                }}
              >
                <FontAwesomeIcon icon={faUsers} size={15} />
                {' : '}
                {data.numOfPersons}
              </Text>

              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 12,
                  fontWeight: '100',
                  opacity: 0.8,
                }}
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  size={12}
                  style={{
                    marginRight: 4,
                    marginTop: 2,
                  }}
                />{' '}
                : {data.client.profile.phone}
              </Text>
            </View>
          </View>
        </View>
      </Modal>
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
    flex: 0.3,
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
