import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthScreen from './src/components/Auth/AuthScreen';
import {
  Provider as StoreProvider,
  useDispatch,
  useSelector,
} from 'react-redux';
import store from './src/redux/store';
import { Init } from './src/redux/actions/authActions';
import Reservations from './src/components/Reservations/Reservations';
import { colors } from './src/constants';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faNoteSticky, faQrCode } from '@fortawesome/free-solid-svg-icons';
import Entypo from 'react-native-vector-icons/Entypo';
import DrawerContent from './src/navigation/DrawerContent';
import Clients from './src/components/Clients/Clients';
import HomeScreen from './src/components/Home/HomeScreen';
import { Pressable, Text } from 'react-native';
const Drawer = createDrawerNavigator();

const RootNavigation = () => {
  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();
  const init = async () => {
    await dispatch(Init());
  };

  React.useEffect(() => {
    init();
  }, []);
  return token ? (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="fade"
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: () => (
              <Entypo name="home" size={24} color={colors.primary} />
            ),
          }}
        />
        <Drawer.Screen
          name="Reservations"
          component={Reservations}
          options={{
            drawerIcon: () => (
              <FontAwesomeIcon
                icon={faNoteSticky}
                size={24}
                color={colors.primary}
              />
            ),
            headerRight: () => (
              <Pressable
                onPress={() => console.log('clicked')}
                style={{ padding: 10 }}
              >
                <Text>QR CODE HERE</Text>
              </Pressable>
            ),
          }}
        />
        <Drawer.Screen
          name="Cliens"
          component={Clients}
          options={{
            drawerIcon: () => (
              <Entypo name="users" size={24} color={colors.primary} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  ) : (
    <AuthScreen />
  );
};

function App() {
  return (
    <StoreProvider store={store}>
      <RootNavigation />
    </StoreProvider>
  );
}

export default App;
