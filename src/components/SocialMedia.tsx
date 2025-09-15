import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SocialMedia = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/SocialMediaIcons/facebook.png')}
        style={styles.image}
      />
      <Image source={require('../assets/SocialMediaIcons/google.png')} />
      <Image source={require('../assets/SocialMediaIcons/twitter.png')} />
    </View>
  );
};

export default SocialMedia;

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems: 'center',
  },
});
