import React from 'react';
import { Swing } from 'react-native-animated-spinkit';
import { View, StyleSheet, Dimensions } from 'react-native';

//custom imports below
import Colors from '../utils/colors';

const { width, height } = Dimensions.get('window');

export default function Loader() {
  return (
    <View style={styles.container}>
      <Swing size={150} color={Colors.APP_COLOR} />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    width,
    top: 0,
    height,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: Colors.TRANSPARENT_01
  },
});

