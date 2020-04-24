import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, Text, ScrollView, FlatList } from 'react-native';

//custom imports below
import { getMovies } from './action';
import Header from '../../components/header';
import Loader from '../../components/loader';
import constants from '../../utils/constants';
import { ReducersModal } from '../../utils/modals';
import CinemaCard from '../../components/cinemaCard';

export default function Home() {
  const dispatch = useDispatch();
  const { loading, movies } = useSelector((state: ReducersModal) => state.moviesReducer);

  useEffect(() => {
    dispatch(getMovies());
  }, [])

  /**
   * function to render cinemas view with list of cinemas for users
   */
  const renderCinemas = () => {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }

  return (
    <ScrollView
      bounces={false}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Header />
      {renderCinemas()}
      {loading && <Loader />}
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

