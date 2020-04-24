import React from 'react';
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//custom imports below
import Home from '../screens/home';
import Colors from '../utils/colors';
import { vw } from '../utils/dimensions';

const HomeStack = createStackNavigator();
const { Navigator, Screen } = createBottomTabNavigator();

const HomeNavigator = ({ navigation, route }: any) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={"Home"}
        component={Home}
        options={{
          headerShown: false
        }}

      />
    </HomeStack.Navigator>
  );
};

/**
 * define bottom tab navigator
 */
export default function Route() {
  return (
    <NavigationContainer>
      <Navigator
        tabBarOptions={{
          activeTintColor: Colors.APP_COLOR
        }}
      >
        <Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarLabel: 'HOME',
            tabBarIcon: ({ focused, size }) =>
              <MaterialIcons name="home" size={size}
                style={{ color: focused ? Colors.APP_COLOR : Colors.GREY }} />
          }}
        />
        <Screen name="Tickets"
          component={HomeNavigator}
          options={{
            tabBarLabel: 'Tickets',
            tabBarIcon: ({ focused, size }) =>
              <FontAwesome name="ticket" size={size}
                style={{ color: focused ? Colors.APP_COLOR : Colors.GREY }} />
          }}
        />
        <Screen name="hoverBtn"
          component={Home}
          options={{
            tabBarButton: () => (
              <View style={styles.tabBarButtonContainer}>
                <FontAwesome name="ticket" size={vw(30)} style={{ top: 40 }} />
              </View>)
          }}
        />
        <Screen
          name="Movies"
          component={HomeNavigator}
          options={{
            tabBarLabel: 'Movies',
            tabBarIcon: ({ focused, size }) =>
              <FontAwesome name="play-circle" size={size}
                style={{ color: focused ? Colors.APP_COLOR : Colors.GREY }} />
          }}
        />
        <Screen
          name="Cinemas"
          component={HomeNavigator}
          options={{
            tabBarLabel: 'Cinemas',
            tabBarIcon: ({ focused, size }) =>
              <MaterialIcons name="movie" size={size}
                style={{ color: focused ? Colors.APP_COLOR : Colors.GREY }} />
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  tabBarButtonContainer: {
    width: 90,
    height: 90,
    bottom: 40,
    borderRadius: 100,
    alignItems: 'center',
    borderBottomWidth: 50,
    justifyContent: 'flex-end',
    borderBottomColor: Colors.TRANSPARENT_01,
  }
})

