import React from 'react';
import { useSelector } from 'react-redux';
import { View, Image, Text, StyleSheet } from 'react-native';

//custom imports below
import { vw } from '../utils/dimensions';
import constants from '../utils/constants';
import { ReducersModal } from '../utils/modals';

interface Props {
  title: string;
  poster_path: string;
  genre_ids: number[];
}

export default function ReleasesCard({ title, poster_path, genre_ids }: Props) {
  const { genres_list } = useSelector((state: ReducersModal) => state.moviesReducer);
  const imageSource = `${constants.base_image_url}${poster_path}`;

  let genre = "Action";
  if (genres_list.length > 0 && genre_ids && genre_ids.length > 0) {
    let firstGenre = genre_ids[0],
      foundGenre = genres_list.find(a => a.id === firstGenre);
    if (foundGenre) {
      genre = foundGenre.name;
    }
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageSource }} style={styles.imageStyle} resizeMode="cover" />
      <Text numberOfLines={1} style={styles.subTitle}>{genre}</Text>
      {/* <Rating
        rating={2}
      /> */}
      <Text numberOfLines={2} style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: vw(180),
    height: vw(270),
    borderRadius: 10,
    marginHorizontal: 10,
  },
  imageStyle: {
    width: vw(180),
    height: vw(180),
    borderRadius: 20,
  },
  title: {
    fontSize: 16,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    marginVertical: 5
  }
})