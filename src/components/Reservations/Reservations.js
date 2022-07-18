import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  Image,
  Animated,
} from 'react-native';
import React, { useRef, useState } from 'react';
import Search from '../Search/Search';
import {
  faFilter,
  faFilterCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { colors, status, statusArray } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import {
  getReservationByStatus,
  getReservations,
} from '../../redux/actions/reservationsActions';
import { useEffect } from 'react';
import { CardOfReservations } from '../../helpers/CardOfReservations';
import { ModalScreen, ResInfo } from '../../helpers/ResInfo';

const ItemView = ({ item }) => {
  return (
    <View>
      <Text>{item._id}</Text>
    </View>
  );
};
const Reservations = () => {
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [masterData, setMasterData] = useState([]);
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const [selectedReservation, setSelectedReservation] = useState(null);
  //get reservations from server
  const { data } = useSelector((state) => state.reservations);
  useEffect(() => {
    dispatch(getReservations(''));
  }, []);
  useEffect(() => {
    setMasterData(data);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [data, dispatch]);

  const handlePress = (id, status) => {
    setSelected(id);
    searchFilterFunction(status);
  };
  const searchFilterFunction = async (status) => {
    return null;
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Image
        source={{
          uri: 'https://reservation.trustdev.info/static/media/Groupe%20de%20masques%2010.b55bbe35.png',
        }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={4}
      />
      <View style={styles.container}>
        <Search />
        <FontAwesomeIcon
          icon={faFilterCircleXmark}
          size={30}
          style={{
            margin: 10,
            color: colors.white,
          }}
        />
      </View>
      <View
        style={{
          flex: 0.2,
          flexDirection: 'row',
          justifyContent: 'space-between',

          alignItems: 'flex-start',
        }}
      >
        {statusArray &&
          statusArray.map((s, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  handlePress(s.id, s.status);
                }}
                style={{
                  backgroundColor:
                    selected == s.id ? colors.primary : colors.grey,
                  padding: 10,
                  borderRadius: 999,

                  margin: 5,
                  marginTop: 30,
                  height: 40,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                  elevation: 1,
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Roboto',
                    fontSize: 10,
                    color: colors.white,
                  }}
                >
                  {s.status}
                </Text>
              </TouchableOpacity>
            );
          })}
      </View>
      <View
        style={{
          flex: 1,

          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {loading ? (
          <ActivityIndicator size="large" color={colors.primary} />
        ) : masterData ? (
          <>
            <FlatList
              data={masterData}
              renderItem={({ item, index }) => (
                <>
                  <CardOfReservations
                    data={item}
                    index={index}
                    key={item._id}
                    open={(data) => {
                      modalRef?.current?.open();
                      setSelectedReservation(item);
                    }}
                  />
                </>
              )}
              onSwipeLeft={(data) => {
                console.log(data);
              }}
              keyExtractor={(item) => item._id}
            />
          </>
        ) : (
          <Text
            style={{
              fontFamily: 'Roboto',
              fontSize: 20,
              color: colors.grey,
              marginTop: 20,
            }}
          >
            No reservations found
          </Text>
        )}
      </View>
      {selectedReservation && (
        <ResInfo
          modal={modalRef}
          selectedReservation={selectedReservation}
          masterData={masterData}
          setMasterData={setMasterData}
        />
      )}
    </View>
  );
};

export default Reservations;

const styles = StyleSheet.create({
  container: {
    flex: 0.1,

    flexDirection: 'row',
  },
});
