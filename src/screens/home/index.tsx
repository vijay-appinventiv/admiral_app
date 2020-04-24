import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, ScrollView, FlatList, View } from 'react-native';

//custom imports below
import Header from '../../components/header';
import Loader from '../../components/loader';
import constants from '../../utils/constants';
import { ReducersModal } from '../../utils/modals';
import CinemaCard from '../../components/cinemaCard';
import ReleasesCard from '../../components/releasesCard';
import { getMoviesAndGenres, updateLoading } from './action';

export default function Home() {
  const dispatch = useDispatch();
  const { loading, movies_data } = useSelector((state: ReducersModal) => state.moviesReducer);

  useEffect(() => {
    dispatch(updateLoading(true));
    dispatch(getMoviesAndGenres());
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
          keyExtractor={(item: any) => item.id}
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

  const renderMovies = (title: string) => {
    return (
      <React.Fragment>
        <Text style={styles.heading}>{title}</Text>
        <FlatList
          data={movies_data}
          horizontal={true}
          keyExtractor={(item: any, index: any) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <ReleasesCard
              {...item}
            />
          )}
        />
      </React.Fragment>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      {
        loading ?
          <Loader />
          :
          <ScrollView
            bounces={false}
            style={styles.container}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
          >
            {renderCinemas()}
            {renderMovies("New Relesae")}
            {renderMovies("You might want to see this")}
          </ScrollView>
      }
    </View>
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
    fontWeight: "bold",
    paddingHorizontal: 10
  }
})

