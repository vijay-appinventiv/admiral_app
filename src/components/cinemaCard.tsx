import React from 'react';
import { Text, StyleSheet, ImageBackground, View } from 'react-native';

//custom imports below
import Colors from '../utils/colors';
import { vw, vh } from '../utils/dimensions';

interface Props {
  title: string;
  img_url: string;
}

export default function CinemaCard({ title, img_url }: Props) {
  return (
    <View style={styles.container}>
      <ImageBackground blurRadius={3} source={{ uri: img_url }}
        resizeMode="cover" style={styles.imageStyle}>
        <Text style={styles.subTitle}>
          {title}
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: vw(100),
    height: vh(60),
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    marginHorizontal: 10,
    justifyContent: 'center'
  },
  imageStyle: {
    width: vw(100),
    height: vw(100),
    alignItems: 'center',
    justifyContent: 'center'
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.WHITE,
  }
})