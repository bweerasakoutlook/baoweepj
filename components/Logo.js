import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Logo = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image 
      resizeMode='cover'
      style={{
          width: 100,
          height: 25,
      }}
      source={require('../assets/logo_tot.png')} />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({});
