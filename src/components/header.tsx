import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

//csutom imports below
import Colors from '../utils/colors';
import { vw, vh } from '../utils/dimensions';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.headerview}>
        <React.Fragment>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 1 }}
            colors={['#ffd900', '#ffd000', '#ffbe00', '#ffaa00', '#ffa200']} style={styles.linear}>
          </LinearGradient>
          <View style={styles.headerBtnContainer} >
            <TouchableOpacity>
              <MaterialIcons name="menu" size={vw(30)} color={Colors.WHITE} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileContainer}>
            </TouchableOpacity>
          </View>
        </React.Fragment>
      </View>
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={vw(25)} color={Colors.GREY} />
        <TextInput style={styles.searchInput} placeholder="Search movie title..." />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: vh(130)
  },
  headerview: {
    width: '110%',
    left: vw(-25),
    position: 'absolute',
    borderBottomLeftRadius: vw(150),
    borderBottomRightRadius: vw(120),
  },
  searchContainer: {
    left: vw(25),
    right: vw(25),
    height: vh(38),
    bottom: vh(10),
    shadowOpacity: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: vh(100),
    shadowColor: 'lightgray',
    paddingHorizontal: vh(16),
    backgroundColor: Colors.WHITE,
    shadowOffset: { height: vh(2), width: vh(1.5) },
  },
  searchInput: {
    flex: 1,
    height: '100%',
    color: 'black',
    fontSize: vh(13),
    marginHorizontal: vh(10),
  },
  linear: {
    left: vw(-38),
    width: '120%',
    height: vh(102),
    position: 'absolute',
    borderBottomLeftRadius: vw(105),
    borderBottomRightRadius: vw(100),
  },
  headerBtnContainer: {
    width: '100%',
    height: vh(50),
    marginTop: vh(20),
    paddingLeft: vw(40),
    flexDirection: 'row',
    paddingRight: vw(30),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  profileContainer: {
    width: vw(30),
    borderWidth: 3,
    height: vw(30),
    borderRadius: vw(15),
    borderColor: Colors.GREY,
  }
})