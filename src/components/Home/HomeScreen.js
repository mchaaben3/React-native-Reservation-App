import {
  FlatList,
  ListView,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Logout } from '../../redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { getStats } from '../../redux/actions/statsActions';
import { Card, Title, Paragraph } from 'react-native-paper';
import { colors } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faBook,
  faClock,
  faNoteSticky,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

const HomeScreen = () => {
  const [homeData, setHomeData] = useState({});
  const { loading, data, error } = useSelector((state) => state.stats);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStats());
  }, []);
  useEffect(() => {
    setHomeData(data);
  }, [data]);
  return (
    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={[
              {
                title: 'Nombre de clients',
                value: data.clientsCount,
                icon: faUsers,
              },
              {
                title: 'Nombre de reservations',
                value: data.reservationsCount,
                icon: faNoteSticky,
              },
              {
                title: 'Nombre de RPs',
                value: data.rpsCount,
                icon: faBook,
              },
              {
                title: 'Reservations en attente',
                value: data.pendingReservationsCount,
                icon: faClock,
              },
            ]}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-around' }}
            renderItem={({ item }) => (
              <Card style={styles.card}>
                <FontAwesomeIcon
                  icon={item.icon}
                  size={30}
                  color={colors.primary}
                />
                <Title
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginBottom: 10,
                    flex: 1,
                    flexDirection: 'column',
                  }}
                >
                  <>
                    <Text style={{ marginLeft: 10 }}>{item.title}</Text>
                  </>
                </Title>

                <Card.Content>
                  <Paragraph>{item.value}</Paragraph>
                </Card.Content>
              </Card>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  card: {
    margin: 5,
    padding: 10,

    backgroundColor: '#fff',
    borderRadius: 10,
    width: 150,
    height: 200,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
  },
  button: {
    backgroundColor: '#ccc',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
