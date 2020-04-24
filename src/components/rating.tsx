import React from 'react';
import { StyleSheet } from 'react-native';
import StarRating from 'react-native-star-rating';

//custom imports below
import Colors from '../utils/colors';

interface Props {
  rating: number;
}

export default function Rating({ rating }: Props) {
  return (
    <StarRating
      maxStars={5}
      starSize={20}
      rating={rating}
      buttonStyle={styles.buttonStyle}
      fullStarColor={Colors.APP_COLOR}
      emptyStarColor={Colors.APP_COLOR}
      containerStyle={styles.containerStyle}
    />
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: "flex-start"
  },
  buttonStyle: {
    paddingLeft: 5,
    paddingRight: 5
  }
});