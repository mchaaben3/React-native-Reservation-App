import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { signin } from '../../redux/actions/authActions';
import AuthStyles from '../../styles/AuthStyles';

const AuthScreen = () => {
  const [email, setEmail] = useState('Admin.codeabar@gmail.com');
  const [password, setPassword] = useState('123456789');
  const [isConnected, setIsConnected] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(signin(email, password));
  };
  const images = {
    imageBackground: {
      uri: 'https://reservation.trustdev.info/static/media/Groupe%20de%20masques%2010.b55bbe35.png',
    },
    imageLogo: {
      uri: 'https://reservation.trustdev.info/static/media/logo.ffaec3d7.png',
    },
  };
  return (
    <View style={AuthStyles.container}>
      <ImageBackground
        source={images.imageBackground}
        style={AuthStyles.imageBackground}
      >
        <View style={AuthStyles.containerLogo}></View>
        <Image source={images.imageLogo} style={AuthStyles.logo} />
      </ImageBackground>

      <View style={AuthStyles.loginContainer}>
        <TextInput
          style={AuthStyles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={AuthStyles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <View style={AuthStyles.buttonContainer}>
          <Pressable style={AuthStyles.button} onPress={handleSubmit}>
            <Text>Sign In</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default AuthScreen;
