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

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

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
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: Colors.APP_COLOR
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarLabel: 'HOME',
            tabBarIcon: ({ focused, size }) =>
              <MaterialIcons name="home" size={size} />
          }}
        />
        <Tab.Screen name="Tickets"
          component={HomeNavigator}
          options={{
            tabBarLabel: 'Tickets',
            tabBarIcon: ({ focused, size }) =>
              <FontAwesome name="ticket" size={size} />
          }}
        />
        <Tab.Screen name="Overlay2"
          component={Home}
          options={{
            tabBarButton: () => (
              <View style={styles.tabBarButtonContainer}>
                <FontAwesome name="ticket" size={vw(60)} />
              </View>)
          }}
        />
        <Tab.Screen
          name="Movies"
          component={HomeNavigator}
          options={{
            tabBarLabel: 'Movies',
            tabBarIcon: ({ focused, size }) =>
              <FontAwesome name="play-circle" size={size} />
          }}
        />
        <Tab.Screen
          name="Cinemas"
          component={HomeNavigator}
          options={{
            tabBarLabel: 'Cinemas',
            tabBarIcon: ({ focused, size }) =>
              <MaterialIcons name="movie" size={size} />
          }}
        />
      </Tab.Navigator>
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
    borderBottomColor: 'transparent',
  }
})

