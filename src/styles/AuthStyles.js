import { StyleSheet } from 'react-native';
import { colors } from '../constants';

export default AuthStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  loginContainer: {
    flex: 0.4,

    backgroundColor: colors.white,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logo: {
    width: 200,
    height: 160,
    position: 'absolute',
  },
  imageBackground: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 390,
    height: 325,
    backgroundColor: colors.primary,
    opacity: 0.6,
  },
});
