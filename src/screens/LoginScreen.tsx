import React from 'react';

import {
  ImageBackground,
  StyleSheet,
  Platform,
  Text,
  View,
} from 'react-native';
import { Fonts } from '../styles/fonts';
import MyButton from '../components/MyButton';

const LoginScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/img1.jpg')}
      style={styles.ImageBackground}
      resizeMode="cover"
    >
      <View>
        <MyButton title={'Login'} />
        <Text style={styles.title}>Login</Text>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageBackground: {
    width: '100%',
    height: '100%',

    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.merriweatherBlack,
  },
});
