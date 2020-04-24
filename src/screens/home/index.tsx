import React from 'react';
import { View, StyleSheet, Text, ScrollView, FlatList } from 'react-native';

//custom imports below
import Header from '../../components/header';
import constants from '../../utils/constants';
import CinemaCard from '../../components/cinemaCard';

export default function Home() {
  return (
    <ScrollView
      bounces={false}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Header />
      <View>
        <Text style={styles.heading}>{"Cinema around your area"}</Text>
        <FlatList
          data={constants.cinemas_data}
          horizontal={true}
          keyExtractor={(item: any, index: any) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CinemaCard
              {...item}
            />
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "600",
    paddingHorizontal: 10
  }
})

