import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HousingDetail from "./HousingDetail";
import HousingList from "./HousingList.Container";
import SearchForm from "./SearchForm";
import Profile from "./Profile";
import Login from "./Login";
import Map from "./Map";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ExploreTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={HousingList} />
      <Stack.Screen name="Detail" component={HousingDetail} />
      <Stack.Screen name="Search" component={SearchForm} />
    </Stack.Navigator>
  );
};

const ProfileTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const MapTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Explore" component={ExploreTab} />
        <Tab.Screen name="Profile" component={ProfileTab} />
        <Tab.Screen name="Map" component={MapTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
