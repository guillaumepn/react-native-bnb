import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HousingDetail from "./HousingDetail";
import HousingList from "./HousingList";
import SearchForm from "./SearchForm";

const Navigator = () => {
  const [navigation, setNavigation] = useState({
    currentScreen: "list",
    screenParams: {},
  });

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={HousingList} />
        <Stack.Screen name="Detail" component={HousingDetail} />
        <Stack.Screen name="Search" component={SearchForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
