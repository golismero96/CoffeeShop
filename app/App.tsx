import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as screenPages from "./screens";
import TabNavigator from "./navigators/TabNavigator";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Screen
          name="MovieDetails"
          component={screenPages.MovieDetailsScreen}
        />
        <Stack.Screen
          name="SeatBooking"
          component={screenPages.SeatBookingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
